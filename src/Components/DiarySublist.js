/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { useHistory, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/DiarySublist.module.scss';
import { CalendarContext } from '../Context/CalendarContext';
import { MapContext } from '../Context/MapContext';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const DiarySublist = () => {
  const mainCtx = useContext(MainContext);
  const { dispatch } = mainCtx;

  const calCtx = useContext(CalendarContext);
  const date = calCtx && calCtx.calendarState.selectedDate;
  const calendarList = calCtx && calCtx.calendarState.sublist;

  const mapCtx = useContext(MapContext);
  const clickPosition = mapCtx && mapCtx.mapState.clickPosition;
  let mapClickLat = 0;
  let mapClickLng = 0;
  if (mapCtx) {
    mapClickLat = clickPosition.lat;
    mapClickLng = clickPosition.lng;
  }

  const mapSublist = mapCtx && mapCtx.mapState.sublist;
  const mapList =
    mapCtx && mapSublist.length
      ? mapClickLat === mapSublist[0].location.lat &&
        mapClickLng === mapSublist[0].location.lng
        ? mapSublist
        : []
      : [];
  const currentPage = useLocation().pathname;
  const subList = currentPage === '/calendar' ? calendarList : mapList;
  const history = useHistory();

  const writeDiary = () => {
    if (currentPage === '/calendar') {
      dispatch({ type: 'CHANGE_DATE', date });
    } else {
      const today = new Date();
      const yy = today.getFullYear();
      const mm = today.getMonth() + 1;
      const dd = today.getDate();
      const todayDate = `${yy}-${mm}-${dd}`;
      dispatch({ type: 'CHANGE_DATE', date: todayDate });
      dispatch({ type: 'CHANGE_LOCATION', location: clickPosition });
    }
    history.push('/diary');
  };

  return (
    <>
      <ul className={cx('diaryList')}>
        <button type="button" className={cx('addBtn')} onClick={writeDiary}>
          +
        </button>
        <li
          style={{ display: subList.length ? 'none' : 'block' }}
          className={cx('message')}
        >
          일기를 작성해 주세요
        </li>
        {subList.map(({ id, title, date, location, imagePaths }) => {
          return (
            <li key={id} className={cx('diary')}>
              <Link to={`/diaryViewer/${id}`}>
                {/* <img
                  src={
                    imagePaths.length
                      ? imagePaths[0]
                      : 'https://pbs.twimg.com/profile_images/694312120272318464/iFZU5oBJ_400x400.png'
                  }
                  alt="thumbnail"
                  className={cx('thumbnail')}
                /> */}
                <div
                  className={cx('thumbnail')}
                  style={{
                    backgroundImage: `url(
                ${
                  imagePaths.length
                    ? imagePaths[0]
                    : 'https://pbs.twimg.com/profile_images/694312120272318464/iFZU5oBJ_400x400.png'
                }
                )`,
                  }}
                />
                <div className={cx('info')}>
                  <h2 className={cx('title')}>{title}</h2>
                  <p className={cx('location')}>{location.name}</p>
                  <p className={cx('details')}>{date}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DiarySublist;
