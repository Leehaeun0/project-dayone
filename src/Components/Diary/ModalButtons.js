import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/Modal.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const ModalButtons = ({ dateState, location }) => {
  const mainCtx = React.useContext(MainContext);
  const { dispatch } = mainCtx;
  const { modalState, setModalState } = React.useContext(DiaryContext);
  const [msgState, setMsgState] = useState('');

  const closeModal = () => setModalState('initial');

  const calendarSubmit = () => {
    if (!dateState) {
      setMsgState('날짜를 선택해 주세요');
    } else {
      dispatch({ type: 'CHANGE_DATE', date: dateState });
      setMsgState('');
      setModalState('initial');
    }
  };

  const mapSubmit = () => {
    console.log(location);
    if (!location.name) return;
    dispatch({ type: 'CHANGE_LOCATION', location });
    setModalState('initial');
  };

  return (
    <>
      <span
        className={cx('warningMsg')}
        style={{ display: msgState ? 'block' : 'none' }}
      >
        {msgState}
      </span>
      <div className={cx('btnWrapper')}>
        <button type="button" className={cx('cancelBtn')} onClick={closeModal}>
          취소
        </button>
        <button
          type="button"
          className={cx('submitBtn')}
          onClick={modalState === 'Calendar' ? calendarSubmit : mapSubmit}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default ModalButtons;
