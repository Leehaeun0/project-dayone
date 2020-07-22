/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkLine } from '@fortawesome/free-regular-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import sanitizeHtml from 'sanitize-html';
import styles from './Style/TimeLineList.module.scss';
import { MainContext } from '../Context/MainContext';
import image1 from '../Util/asset/image1.jpg';
import image2 from '../Util/asset/image2.jpg';
import image3 from '../Util/asset/image3.jpg';
import image4 from '../Util/asset/image4.jpg';

const cx = classNames.bind(styles);
let start = 10;
let end = 20;

const TimeLineList = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;

  const images = [image1, image2, image3, image4];

  const sortDiaries = diaries.sort((a, b) => b.id - a.id);
  const diaryAmount = sortDiaries.length;

  const [hasMoreState, setHasMoreState] = useState(diaryAmount > 10);
  const [renderDiaries, setRenderDiaries] = useState(() => {
    return diaryAmount < 10 ? sortDiaries : sortDiaries.slice(0, 10);
  });

  useEffect(() => {
    setRenderDiaries(
      diaries.sort((a, b) => b.id - a.id).slice(0, renderDiaries.length),
    );
  }, [diaries]);

  const getMoreDiaries = () => {
    if (diaryAmount < end) {
      end = diaryAmount;
      setHasMoreState(false);
      start = 10;
      end = 20;
      return;
    }
    setRenderDiaries(renderDiaries.concat(sortDiaries.slice(start, end)));
    start += 10;
    end += 10;
  };

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  console.log(start, end);

  return (
    <ul className={cx('timelineWrapper')}>
      <InfiniteScroll
        style={{ overflowY: 'hidden' }}
        dataLength={renderDiaries.length}
        next={getMoreDiaries}
        hasMore={hasMoreState}
        loader={
          <h4 style={{ margin: '30px 0 40px', textAlign: 'center' }}>
            Loading...
          </h4>
        }
        endMessage={
          <p
            style={{
              textAlign: 'center',
            }}
          >
            <b style={{ display: 'block', margin: '30px 0 40px' }}>
              모든 일기를 보셨습니다
            </b>
          </p>
        }
      >
        {renderDiaries.map((diary) => (
          <li key={diary.id} className={cx('timelineList')}>
            <Link
              to={`/diaryViewer/${diary.id}`}
              style={{ textDecoration: 'none' }}
            >
              <figure>
                {diary.imagePaths.length ? (
                  <img
                    className={cx('thumbnail')}
                    src={diary.imagePaths[0]}
                    alt={diary.title}
                  />
                ) : (
                  ''
                )}
                <figcaption>
                  <div className={cx('title')}>{diary.title}</div>
                  <div className={cx('date')}>
                    {diary.date.split('-').join('. ')}
                  </div>
                  <p className={cx('content')}>
                    {sanitizeHtml(diary.content, { allowedTags: [] })}
                  </p>
                </figcaption>
              </figure>
            </Link>
            <input
              id={diary.id}
              type="checkbox"
              checked={diary.isBookmarked ? 'checked' : ''}
              onChange={onChangeBookmark}
            />
            <label htmlFor={diary.id}>
              <FontAwesomeIcon
                icon={diary.isBookmarked ? faBookmark : faBookmarkLine}
              />
            </label>
          </li>
        ))}
      </InfiniteScroll>
    </ul>
  );
};

export default TimeLineList;
