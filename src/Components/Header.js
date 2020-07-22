import React from 'react';
import { useRouteMatch, Link, NavLink } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { useLocation } from 'react-router';
import classNames from 'classnames/bind';
import {
  faHome,
  faPen,
  faMapMarkedAlt,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Style/Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { pathname } = useLocation();
  const lastLocation = useLastLocation();
  const pastPathname = lastLocation && lastLocation.pathname;
  const pastActive =
    (pathname.includes('/diaryViewer') || pathname.includes('/tags')) &&
    pastPathname;
  const match = useRouteMatch({
    path: '/diary',
  });

  console.log(lastLocation);
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <h1 className={cx('logo')}>
          <Link to="/">DAY ONE</Link>
        </h1>
        {match ? (
          <nav match={match} />
        ) : (
          <nav className={cx('nav')}>
            <NavLink
              to="/"
              activeClassName={cx('active')}
              exact
              className={cx(
                { active: pathname.includes('/timeline') },
                { active: pastActive === '/' },
              )}
            >
              <FontAwesomeIcon icon={faHome} className={cx('icon')} />
              <span className={cx('tooltip')}>홈</span>
            </NavLink>
            <NavLink
              to="/diary"
              activeClassName={cx('active')}
              className={cx({ active: pastActive === '/diary' })}
            >
              <FontAwesomeIcon icon={faPen} className={cx('icon')} />
              <span className={cx('tooltip')}>일기 작성</span>
            </NavLink>
            <NavLink
              to="/map"
              activeClassName={cx('active')}
              className={cx({ active: pastActive === '/map' })}
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
              <span className={cx('tooltip')}>지도</span>
            </NavLink>
            <NavLink
              to="/calendar"
              activeClassName={cx('active')}
              className={cx({ active: pastActive === '/calendar' })}
            >
              <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
              <span className={cx('tooltip')}>달력</span>
            </NavLink>
            <NavLink
              to="/mypage"
              activeClassName={cx('active')}
              className={cx({ active: pastActive === '/mypage' })}
            >
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
              <span className={cx('tooltip')}>내 정보</span>
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
