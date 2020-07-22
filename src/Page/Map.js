import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import { MapProvider } from '../Context/MapContext';
import MapComponent from '../Components/Map/MapComponent';
import DiarySublist from '../Components/DiarySublist';

const cx = classNames.bind(styles);

const Map = () => {
  return (
    <main className={cx('main')}>
      <MapProvider>
        <MapComponent />
        <DiarySublist />
      </MapProvider>
    </main>
  );
};
export default Map;
