/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/MapSearchList.module.scss';
import { MapContext } from '../../Context/MapContext';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const { kakao } = window;

const MapSearchList = ({
  removePrevPlaceMarkers,
  resetMarkerImage,
  changeMarkerInfo,
}) => {
  const mapContext = useContext(MapContext);
  const mainContext = useContext(MainContext);

  const { state } = mainContext;
  const { diaries } = state;

  const { mapState, setClickPosition } = mapContext;
  const {
    map,
    places,
    message,
    pagination,
    placeMarkers,
    isPlacesVisible,
    activeId,
  } = mapState;

  const changePage = (page) => {
    resetMarkerImage();
    removePrevPlaceMarkers(placeMarkers);
    pagination.gotoPage(page);
  };

  const changeClickPosition = (name, x, y, id) => {
    resetMarkerImage();
    const pMarker = placeMarkers[id - 1];
    const infoWindow = new kakao.maps.InfoWindow({ zindex: 1 });
    infoWindow.setContent(name);
    changeMarkerInfo(pMarker, infoWindow, map);
    const clickPosition = {
      lat: parseFloat(y),
      lng: parseFloat(x),
      name,
    };
    setClickPosition(clickPosition, id, diaries);
  };

  return (
    <>
      {message && <p className={cx('mapSearchMsg')}>{message}</p>}
      {isPlacesVisible && (
        <div className={cx('mapSearchMenu')}>
          <ul className={cx('mapSearchList')}>
            {places.map(
              (
                {
                  id,
                  place_name,
                  road_address_name,
                  address_name,
                  phone,
                  x,
                  y,
                },
                index,
              ) => {
                return (
                  <li
                    key={id}
                    className={cx('mapSearchItem', {
                      active: activeId === index + 1,
                    })}
                    onClick={() => {
                      changeClickPosition(
                        road_address_name || address_name,
                        x,
                        y,
                        index + 1,
                      );
                    }}
                  >
                    <span className={cx('markerBg', `marker${index + 1}`)} />
                    <div className={cx('info')}>
                      <h5 className={cx('placeName')}>{place_name}</h5>
                      {road_address_name && (
                        <p className={cx('roadAddressName')}>
                          {road_address_name}
                        </p>
                      )}
                      {address_name && (
                        <p className={cx('addressName')}>{address_name}</p>
                      )}
                      {phone && <p className={cx('phone')}>{phone}</p>}
                    </div>
                  </li>
                );
              },
            )}
          </ul>
          <div className={cx('mapPagination')}>
            {pagination &&
              Array.from({ length: pagination.last }, (v, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    className={cx('page', {
                      current: pagination.current === page,
                    })}
                    onClick={() => {
                      changePage(page);
                    }}
                  >
                    {page}
                  </button>
                ),
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default MapSearchList;
