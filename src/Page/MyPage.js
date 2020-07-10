import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MainContext } from '../Context/MainContext';
import styles from './Style/MyPage.module.scss';
import DiaryViewer from './DiaryViewer';
import {
  fontAwesomeIcons,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MyPage = () => {
  const mainCtx = React.useContext(MainContext);
  const { diaries, userData } = mainCtx.state;
  const { userId } = userData;
  const bookmarked = diaries.filter(({ isBookmarked }) => isBookmarked);

  return (
    <main>
      <div className={cx('profile')}>
        <h2 className={cx('greeting')}>
          안녕하세요
          <span>
            {userId}
            님!
          </span>
        </h2>
        <ul className={cx('statistics')}>
          <li>
            <span className={cx('numbers')}>235</span>
            <span className={cx('caption')}>일기수</span>
          </li>
          <li>
            <span className={cx('numbers')}>23</span>
            <span className={cx('caption')}>북마크수</span>
          </li>
          <li>
            <span className={cx('numbers')}>2.3</span>
            <span className={cx('caption')}>
              평균
              {/* <br /> */}
              일기수
            </span>
          </li>
        </ul>
        <button type="button" className={cx('logoutBtn')}>
          로그아웃
        </button>
      </div>
      <h3 className={cx('listTitle')}>
        <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
        Bookmarked Diaries
      </h3>
      <ul className={cx('diaryList')}>
        {bookmarked.map(({ id, title, imagePaths }) => {
          return (
            <li key={id} className={cx('diary')}>
              <Link to={`/diaryViewer/${id}`}>
                <figure>
                  <img
                    src={
                      imagePaths.length
                        ? imagePaths[0]
                        : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                    }
                    className={cx('thumbnail')}
                    alt="thumbnail"
                  />
                  <figcaption>{title}</figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </main>
  );
};

export default MyPage;
