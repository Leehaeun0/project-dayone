import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faThList,
  faTags,
  faHashtag,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import SubRouter from '../Router/SubRouter';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const TimeLine = () => {
  const { pathname } = useLocation();
  const context = useContext(MainContext);
  const { state } = context;
  const { userData, allTags } = state;
  const { userId, pic, msg } = userData;
  const altPic =
    'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png';

  const [scroll, setScroll] = useState(false);

  const checkScrollTop = () => {
    !scroll && window.pageYOffset > 200 && setScroll(true);
    scroll && window.pageYOffset <= 200 && setScroll(false);
  };

  window.addEventListener('scroll', checkScrollTop);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTags = () => {
    return allTags.map(({ key, name }) => (
      <li key={key} className={cx('tag')}>
        <Link to={`/tags/${name}`} className={cx('aTag')}>
          <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
          {name}
        </Link>
      </li>
    ));
  };

  return (
    <main>
      <div className={cx('timeline')}>
        <aside className={cx('aside')}>
          <div className={cx('profile')}>
            <div
              className={cx('profilePhoto')}
              style={{
                backgroundImage: `url(${pic || altPic})`,
                opacity: `${pic ? 1.0 : 0.3}`,
              }}
            />
            <div className={cx('profileUserId')}>{userId}</div>
            <div className={cx('profileMsg')}>{msg}</div>
          </div>
          <div className={cx('tagBox')}>
            <FontAwesomeIcon icon={faTags} className={cx('icon')} />
            <span className={cx('tagBoxTitle')}>TAG</span>
            <ul className={cx('tagListWrapper')}>{renderTags()}</ul>
          </div>
        </aside>
        <nav className={cx('nav')}>
          <NavLink
            to="/timeline/list"
            activeClassName={cx('active')}
            className={cx(pathname.includes('/timeline/media') ? '' : 'active')}
          >
            <FontAwesomeIcon icon={faThList} className={cx('icon')} />
            <div className={cx('tooltip')}>리스트</div>
          </NavLink>
          <NavLink to="/timeline/media" activeClassName={cx('active')}>
            <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
            <div className={cx('tooltip')}>사진</div>
          </NavLink>
        </nav>
        <SubRouter />
        <button
          type="button"
          className={cx('backToTop')}
          onClick={backToTop}
          style={{ display: scroll ? 'block' : 'none' }}
        >
          <FontAwesomeIcon icon={faChevronUp} className={cx('icon')} />
        </button>
      </div>
    </main>
  );
};

export default TimeLine;
