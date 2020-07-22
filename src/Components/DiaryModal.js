/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Modal.module.scss';
import { DiaryContext } from '../Context/DiaryContext';
import ModalMap from './Diary/ModalMap';
import ModalCalendar from './Diary/ModalCalendar';
import { MapProvider } from '../Context/MapContext';

const cx = classNames.bind(styles);

const Modal = () => {
  const { modalState, setModalState } = React.useContext(DiaryContext);
  const onClick = (e) => {
    if (
      !e.target.className.includes('dimmed') &&
      !e.target.className.includes('modalDeleteBtn')
    )
      return;
    setModalState('initial');
  };

  const changeModalState = () => {
    if (modalState === 'Calendar') return 'block';
    if (modalState === 'Map') return 'block';
    return 'none';
  };

  const changeModal = () => {
    if (modalState === 'Calendar') return <ModalCalendar />;
    if (modalState === 'Map') return <ModalMap />;
    return <></>;
  };

  return (
    <MapProvider>
      <div
        style={{ display: `${changeModalState()}` }}
        className={cx('dimmed')}
        onClick={onClick}
      >
        <div className={cx('modal')}>
          {changeModal()}
          {/* <button
          className={cx('modalDeleteBtn')}
          type="button"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button> */}
        </div>
      </div>
    </MapProvider>
  );
};

export default Modal;
