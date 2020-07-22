/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkLine } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLineMedia.module.scss';
import { MainContext } from '../Context/MainContext';
import image1 from '../Util/asset/image1.jpg';
import image2 from '../Util/asset/image2.jpg';
import image3 from '../Util/asset/image3.jpg';
import image4 from '../Util/asset/image4.jpg';

const cx = classNames.bind(styles);

const TimeLineMedia = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;

  const sortDiaries = diaries.sort((a, b) => b.id - a.id);

  const images = [image1, image2, image3, image4];

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  return (
    <ul className={cx('timelineWrapper')}>
      {sortDiaries.map((diary) => (
        <li key={diary.id} className={cx('timelineMedia')}>
          <Link to={`/diaryViewer/${diary.id}`}>
            <div
              className={cx('thumbnail')}
              style={{
                backgroundImage: `url(
                ${
                  diary.imagePaths.length
                    ? diary.imagePaths[0]
                    : 'https://takashimaeda.jp/wp-content/uploads/2016/02/nasulog_dayone2_banner.jpg'
                }
                )`,
              }}
            />
          </Link>
          {/* 마우스 hover시 보여지는 부분 */}
          <div className={cx('overwrap')}>
            <input
              id={diary.id}
              type="checkbox"
              checked={diary.isBookmarked ? 'checked' : ''}
              onChange={onChangeBookmark}
            />
            <label htmlFor={diary.id}>
              <span>
                <FontAwesomeIcon
                  icon={diary.isBookmarked ? faBookmark : faBookmarkLine}
                  className={cx('bookmarkIcon')}
                />
              </span>
            </label>
            <Link
              to={`/diaryViewer/${diary.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={cx('diaryInfo')}>
                <div className={cx('title')}>{diary.title}</div>
                <div className={cx('date')}>
                  {diary.date.split('-').join('. ')}
                </div>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TimeLineMedia;
