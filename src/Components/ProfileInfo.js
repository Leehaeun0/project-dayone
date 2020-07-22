/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page/Style/MyPage.module.scss';

const cx = classNames.bind(styles);

const ProfileInfo = ({ pageCtx }) => {
  const altPic =
    'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png';
  const {
    diaries,
    bookmarked,
    userId,
    pic,
    msg,
    diaryPerDay,
    onClickLogOut,
    onClickSetting,
  } = pageCtx;

  return (
    <div className={cx('profile')}>
      <div
        className={cx('profilePic')}
        style={{
          backgroundImage: `url(${pic || altPic})`,
          opacity: pic ? 1 : 0.3,
        }}
        onClick={onClickSetting}
      />
      <div className={cx('infoWrapper')}>
        <h2 className={cx('greeting')}>
          안녕하세요
          <span>
            {userId}
            님!
          </span>
        </h2>
        <h3 className={cx('profileMsg')}>{msg}</h3>
        <ul
          className={cx('statistics')}
          style={{ margin: msg ? '2rem 0 0' : '3.6rem 0 0' }}
        >
          <li>
            <span className={cx('numbers')}>{diaries.length}</span>
            <span className={cx('caption')}>일기수</span>
          </li>
          <li>
            <span className={cx('numbers')}>{bookmarked.length}</span>
            <span className={cx('caption')}>북마크수</span>
          </li>
          <li>
            <span className={cx('numbers')}>{diaryPerDay}</span>
            <span className={cx('caption')}>평균 일기수</span>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className={cx('settingBtn')}
        onClick={onClickSetting}
        style={{
          left: `calc(29rem + ${userId.length * 13}px)`,
        }}
      >
        <FontAwesomeIcon icon={faCog} />
      </button>
      <button type="button" className={cx('logoutBtn')} onClick={onClickLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} className={cx('icon')} />
        로그아웃
      </button>
    </div>
  );
};

export default ProfileInfo;
