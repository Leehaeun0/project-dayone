import React, { useContext, useEffect } from 'react';
import className from 'classnames/bind';
import styles from '../Style/ModalMap.module.scss';
import MapComponent from '../Map/MapComponent';
import { MapContext } from '../../Context/MapContext';
// import { MainContext } from '../../Context/MainContext';
import ModalButtons from './ModalButtons';

const cx = className.bind(styles);

const ModalMap = () => {
  // const { state } = useContext(MainContext);
  const { mapState, clearClickPosition } = useContext(MapContext);
  const { address } = mapState.clickPosition;

  useEffect(() => {
    return () => {
      clearClickPosition();
    };
  }, []);

  const locationMsg = () => {
    if (!address) return '위치를 선택해 주세요';
    return address;
  };

  return (
    <>
      <h3 className={cx('a11yHidden')}>일기를 작성할 위치를 선택하세요</h3>
      <MapComponent />
      <span className={cx('location')}>{locationMsg()}</span>
      <ModalButtons location={mapState.clickPosition} />
    </>
  );
};

export default ModalMap;
