import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <h1 className={cx('logo')}>DAY ONE</h1>
        <nav className={cx('nav')}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className={cx('icon')} />
          </Link>
          <Link to="/diary">
            <FontAwesomeIcon icon={faPen} className={cx('icon')} />
          </Link>
          <Link to="/map">
            <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
          </Link>
          <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
          </Link>

          <Link to="/mypage">
            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
