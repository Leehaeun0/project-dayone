/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkLine } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Style/DiaryViewer.module.scss';
import { MainContext } from '../Context/MainContext';
import DiaryModalSmall from '../Components/DiaryModalSmall';

const cx = classNames.bind(styles);

const DiaryViewer = () => {
  const [viewerState, setViewerState] = useState('initial');
  const {
    state,
    getDiary,
    clearViewerDiary,
    setEditState,
    patchBookmark,
  } = useContext(MainContext);
  const { viewerDiary } = state;
  const { id } = useParams();
  const history = useHistory();
  const lastLocation = useLastLocation();

  useEffect(() => {
    getDiary(id);
    console.log(state);
    return () => {
      clearViewerDiary();
    };
  }, []);

  if (!viewerDiary)
    return <p className={cx('errorMsg')}>다이어리가 존재하지 않습니다.</p>;

  const clickEdit = () => {
    setEditState();
    history.push('/diary');
  };

  const clickDelete = () => setViewerState('Delete');

  const clickGoBack = () => {
    if (!lastLocation) {
      history.goBack();
      return;
    }
    if (lastLocation.pathname === '/diary') {
      window.history.go(-2);
      return;
    }
    if (lastLocation.pathname.includes('/diaryViewer')) {
      window.history.go(-3);
      return;
    }
    history.goBack();
  };

  const clickBookmark = (e) => {
    console.log(e.target.checked);

    patchBookmark(viewerDiary.id, e.target.checked);
  };

  const renderDiary = () => (
    <div
      className={cx('content')}
      dangerouslySetInnerHTML={{ __html: viewerDiary.content }}
    />
  );

  return (
    <main className={cx('wrapViewer')}>
      <h2 className={cx('a11yHidden')}>다이어리 보기</h2>
      <h2 className={cx('title')}>{viewerDiary.title}</h2>
      {renderDiary()}
      <div className={cx('wrapInfo')}>
        <span className={cx('date')}>{viewerDiary.date}</span>
        {viewerDiary.location && viewerDiary.location.name ? (
          <span className={cx('location')}>{viewerDiary.location.name}</span>
        ) : (
          ''
        )}
      </div>
      <input
        id="viewerBookmark"
        className={cx('bookmarkInput')}
        type="checkbox"
        checked={viewerDiary.isBookmarked ? 'checked' : ''}
        onChange={clickBookmark}
      />
      <label
        htmlFor="viewerBookmark"
        className={cx('bookmarkIcon', { active: viewerDiary.isBookmarked })}
      >
        <FontAwesomeIcon
          icon={viewerDiary.isBookmarked ? faBookmark : faBookmarkLine}
        />
      </label>
      <button className={cx('editBtn')} type="button" onClick={clickEdit}>
        수정
      </button>
      <button className={cx('deleteBtn')} type="button" onClick={clickDelete}>
        삭제
      </button>
      <DiaryModalSmall
        viewerState={viewerState}
        setViewerState={setViewerState}
        id={+id}
      />
      <button className={cx('goBackBtn')} type="button" onClick={clickGoBack}>
        뒤로가기
      </button>
      <DiaryModalSmall
        viewerState={viewerState}
        setViewerState={setViewerState}
        id={+id}
      />
    </main>
  );
};

export default DiaryViewer;
