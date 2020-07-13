/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-new */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Style/ReactMap.module.scss';

const cx = classNames.bind(styles);

const { kakao } = window;

const ReactMap = ({ diaries, filterDiariesByLoc }) => {
  const renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.62197524055062, 127.16017523675508),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let selectedMarker = null;

    const normalImageSrc =
      'https://user-images.githubusercontent.com/67693474/87041096-ad4bd880-c22c-11ea-9f6b-c97dbc74a2d9.png';
    const clickImageSrc =
      'https://user-images.githubusercontent.com/67693474/87041692-935ec580-c22d-11ea-9fbf-772878fffa18.png';
    const normalImageSize = new kakao.maps.Size(50, 64);
    const overImageSize = new kakao.maps.Size(55, 70);
    const clickImageSize = new kakao.maps.Size(55, 70);
    const normalImageOption = {
      offset: new kakao.maps.Point(0, 0),
      shape: 'poly',
      coords:
        '26, 61, 29, 58, 31, 56, 34, 54, 37, 50, 39, 47, 43, 44, 46, 41, 47, 36, 48, 30, 49, 22, 47, 17, 45, 12, 40, 7, 35, 4, 28, 2, 22, 3, 16, 4, 10, 8, 7, 12, 4, 18, 2, 24, 2, 30, 3, 35, 5, 40, 8, 44, 11, 47, 14, 48, 17, 52, 19, 55, 22, 28',
    };
    const overImageOption = {
      offset: new kakao.maps.Point(0, 5),
    };
    const clickImageOption = {
      offset: new kakao.maps.Point(0, 5),
      shape: 'poly',
      coords:
        '29, 67, 33, 64, 36, 60, 39, 55, 40, 53, 45, 51, 49, 48, 52, 42, 52, 35, 53, 29, 54, 24, 52, 18, 48, 13, 44, 9, 37, 5, 31, 4, 25, 4, 18, 5, 13, 9, 9, 14, 6, 19, 5, 24, 3, 29, 4, 35, 5, 42, 8, 47, 12, 50, 16, 53, 20, 56, 22, 59, 25, 63',
    };

    const normalImage = new kakao.maps.MarkerImage(
      normalImageSrc,
      normalImageSize,
      normalImageOption,
    );
    const overImage = new kakao.maps.MarkerImage(
      normalImageSrc,
      overImageSize,
      overImageOption,
    );
    const clickImage = new kakao.maps.MarkerImage(
      clickImageSrc,
      clickImageSize,
      clickImageOption,
    );

    const makeOverListener = (marker) => () => {
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(overImage);
      }
    };

    const makeOutListener = (marker) => () => {
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(normalImage);
      }
    };

    const makeClickListener = (marker, lat, lng) => () => {
      if (!selectedMarker || marker !== selectedMarker) {
        !!selectedMarker && selectedMarker.setImage(normalImage);
        marker.setImage(clickImage);
      }
      selectedMarker = marker;
      filterDiariesByLoc(lat, lng);
    };

    const makeMarkers = (diaries) => {
      const markers = [];
      diaries.forEach((diary) => {
        console.log('prop length: ', Object.keys(diary.location).length);
        const hasLocation = Object.keys(diary.location).length > 0;
        console.log('hasLocation?: ', hasLocation);
        if (!hasLocation) return;

        const { lat, lng } = diary.location;

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          image: normalImage,
        });

        kakao.maps.event.addListener(
          marker,
          'click',
          makeClickListener(marker, lat, lng),
        );

        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(marker),
        );

        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(marker),
        );

        markers.push(marker);
      });
      return markers;
    };

    const clusterer = new kakao.maps.MarkerClusterer({
      map,
      averageCenter: true,
      minLevel: 6,
    });

    const markers = makeMarkers(diaries);
    clusterer.addMarkers(markers);
  };

  useEffect(() => {
    kakao.maps.load(() => {
      renderMap();
    });
  }, []);

  return <div className={cx('map')} id="map" />;
};

export default ReactMap;
