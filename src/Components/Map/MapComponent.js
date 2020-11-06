// /* eslint-disable camelcase */
// /* eslint-disable no-use-before-define */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable no-shadow */
// import React, { useEffect, useContext } from 'react';
// import classNames from 'classnames/bind';
// import styles from '../Style/MapComponent.module.scss';
// import MapSearchForm from './MapSearchForm';
// import MapSearchList from './MapSearchList';

// import { MainContext } from '../../Context/MainContext';
// import { MapContext } from '../../Context/MapContext';

// const cx = classNames.bind(styles);

// const { kakao } = window;

// const normalImageSrc =
//   'https://user-images.githubusercontent.com/67693474/87041096-ad4bd880-c22c-11ea-9f6b-c97dbc74a2d9.png';
// const clickImageSrc =
//   'https://user-images.githubusercontent.com/67693474/87041692-935ec580-c22d-11ea-9fbf-772878fffa18.png';
// const imgSrc =
//   'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';

// let normalImageSize = null;
// let overImageSize = null;
// let clickImageSize = null;
// let normalImageOption = null;
// let overImageOption = null;
// let clickImageOption = null;
// let normalImage = null;
// let overImage = null;
// let clickImage = null;

// kakao.maps.load(() => {
//   normalImageSize = new kakao.maps.Size(50, 64);
//   overImageSize = new kakao.maps.Size(55, 70);
//   clickImageSize = new kakao.maps.Size(55, 70);
//   normalImageOption = {
//     offset: new kakao.maps.Point(0, 0),
//     shape: 'poly',
//     coords:
//       '26, 61, 29, 58, 31, 56, 34, 54, 37, 50, 39, 47, 43, 44, 46, 41, 47, 36, 48, 30, 49, 22, 47, 17, 45, 12, 40, 7, 35, 4, 28, 2, 22, 3, 16, 4, 10, 8, 7, 12, 4, 18, 2, 24, 2, 30, 3, 35, 5, 40, 8, 44, 11, 47, 14, 48, 17, 52, 19, 55, 22, 28',
//   };
//   overImageOption = {
//     offset: new kakao.maps.Point(0, 5),
//   };
//   clickImageOption = {
//     offset: new kakao.maps.Point(0, 5),
//     shape: 'poly',
//     coords:
//       '29, 67, 33, 64, 36, 60, 39, 55, 40, 53, 45, 51, 49, 48, 52, 42, 52, 35, 53, 29, 54, 24, 52, 18, 48, 13, 44, 9, 37, 5, 31, 4, 25, 4, 18, 5, 13, 9, 9, 14, 6, 19, 5, 24, 3, 29, 4, 35, 5, 42, 8, 47, 12, 50, 16, 53, 20, 56, 22, 59, 25, 63',
//   };
//   normalImage = new kakao.maps.MarkerImage(
//     normalImageSrc,
//     normalImageSize,
//     normalImageOption,
//   );
//   overImage = new kakao.maps.MarkerImage(
//     normalImageSrc,
//     overImageSize,
//     overImageOption,
//   );
//   clickImage = new kakao.maps.MarkerImage(
//     clickImageSrc,
//     clickImageSize,
//     clickImageOption,
//   );
// });

// let selectedDiaryMarker = null;
// let selectedMouseMarker = null;
// let selectedPlaceMarker = null;
// let selectedPlaceInfo = null;

// const resetMarkerImage = () => {
//   selectedDiaryMarker && selectedDiaryMarker.setImage(normalImage);
//   selectedDiaryMarker = null;
//   selectedMouseMarker && selectedMouseMarker.setMap(null);
//   selectedMouseMarker = null;
//   selectedPlaceInfo && selectedPlaceInfo.close();
//   selectedPlaceInfo = null;
// };

// const changeMarkerInfo = (pMarker, infoWindow, map) => {
//   selectedPlaceMarker = pMarker;
//   selectedPlaceInfo = infoWindow;
//   selectedPlaceInfo.open(map, selectedPlaceMarker);
// };

// const MapComponent = () => {
//   const mainContext = useContext(MainContext);
//   const mapContext = useContext(MapContext);
//   const { state } = mainContext;
//   const { diaries } = state;
//   const {
//     mapState,
//     setMap,
//     setMessage,
//     updatePlace,
//     setClickPosition,
//   } = mapContext;
//   const { map, placeMarkers } = mapState;

//   const searchPlaces = (inputs) => {
//     const ps = new kakao.maps.services.Places();
//     if (!inputs.replace(/^\s+|\s+$/g, '')) {
//       setMessage('장소를 입력해주세요');
//       return false;
//     }
//     ps.keywordSearch(inputs, placesSearchCB);
//   };

//   const removePrevPlaceMarkers = (pMarkers) => {
//     pMarkers.forEach((pMarker) => {
//       pMarker.setMap(null);
//     });
//   };

//   const makePlaceMarkers = (places) => {
//     const placeMarkers = [];

//     const imgSize = new kakao.maps.Size(36, 37);
//     const bounds = new kakao.maps.LatLngBounds();

//     places.forEach((place, i) => {
//       const imgOptions = {
//         spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
//         spriteOrigin: new kakao.maps.Point(0, i * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
//         offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
//       };
//       const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOptions);

//       const placePosition = new kakao.maps.LatLng(place.y, place.x);
//       const placeMarker = new kakao.maps.Marker({
//         position: placePosition,
//         image: markerImg,
//       });
//       bounds.extend(placePosition);
//       placeMarkers.push(placeMarker);
//     });
//     map.setBounds(bounds);
//     return placeMarkers;
//   };

//   const displayPlaceMarkers = (pMarkers, data) => {
//     pMarkers.forEach((pMarker, index) => {
//       kakao.maps.event.addListener(pMarker, 'click', () => {
//         const { address_name, road_address_name, x, y } = data[index];
//         const name = road_address_name || address_name;
//         const lat = y;
//         const lng = x;
//         const clickPosition = {
//           name,
//           lat,
//           lng,
//         };
//         resetMarkerImage();
//         const content = `<div style="padding: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
//           <span style="line-height: 15px">${name}</span>
//           </div>`;
//         selectedPlaceInfo = new kakao.maps.InfoWindow({ zindex: 1 });
//         selectedPlaceMarker = pMarker;
//         selectedPlaceInfo.setContent(content);
//         selectedPlaceInfo.open(map, selectedPlaceMarker);
//         setClickPosition(clickPosition, index + 1, diaries);
//       });
//       pMarker.setMap(map);
//     });
//   };

//   const placesSearchCB = (data, status, pagination) => {
//     removePrevPlaceMarkers(placeMarkers);

//     if (status === kakao.maps.services.Status.OK) {
//       const pMarkers = makePlaceMarkers(data);
//       const payload = {
//         places: data,
//         pagination,
//         placeMarkers: pMarkers,
//         isSearchVisible: true,
//         isPlacesVisible: true,
//         message: '',
//       };
//       updatePlace(payload);
//       displayPlaceMarkers(pMarkers, data);
//     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
//       const payload = {
//         places: [],
//         pagination: {},
//         placeMarkers: [],
//         isSearchVisible: true,
//         isPlacesVisible: false,
//         message: '검색 결과가 존재하지 않습니다.',
//       };
//       updatePlace(payload);
//     } else if (status === kakao.maps.services.Status.ERROR) {
//       setMessage('검색 결과 중 오류가 발생했습니다.');
//     }
//   };

//   const renderMap = () => {
//     const geocoder = new kakao.maps.services.Geocoder();
//     const mouseMarker = new kakao.maps.Marker();
//     const infoWindow = new kakao.maps.InfoWindow({ zindex: 1 });
//     const searchDetailAddrFromCoords = (coords, callback) => {
//       geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
//     };

//     const makeOverListener = (marker) => () => {
//       if (!selectedDiaryMarker || selectedDiaryMarker !== marker) {
//         marker.setImage(overImage);
//       }
//     };

//     const makeOutListener = (marker) => () => {
//       if (!selectedDiaryMarker || selectedDiaryMarker !== marker) {
//         marker.setImage(normalImage);
//       }
//     };

//     const makeDiaryMarkerClickListener = (marker, lat, lng) => () => {
//       resetMarkerImage();
//       selectedDiaryMarker = marker;
//       selectedDiaryMarker.setImage(clickImage);
//       geocoder.coord2Address(lng, lat, (result, status) => {
//         if (status === kakao.maps.services.Status.OK) {
//           const name = result[0].road_address
//             ? result[0].road_address.address_name
//             : result[0].address.address_name;
//           const clickPosition = {
//             lat,
//             lng,
//             name,
//           };
//           setClickPosition(clickPosition, 0, diaries);
//         }
//       });
//     };

//     const makeMouseMarkerClickListener = (mouseEvent) => {
//       resetMarkerImage();
//       searchDetailAddrFromCoords(mouseEvent.latLng, (result, status) => {
//         if (status === kakao.maps.services.Status.OK) {
//           const name = result[0].road_address
//             ? result[0].road_address.address_name
//             : result[0].address.address_name;
//           const clickPosition = {
//             lat: mouseEvent.latLng.Ha,
//             lng: mouseEvent.latLng.Ga,
//             name,
//           };
//           const content = `<div style="padding: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
//           <span style="line-height: 15px">${name}</span>
//           </div>`;
//           selectedMouseMarker = mouseMarker;
//           selectedPlaceInfo = infoWindow;
//           mouseMarker.setMap(map);
//           mouseMarker.setPosition(mouseEvent.latLng);
//           infoWindow.setContent(content);
//           infoWindow.open(map, mouseMarker);
//           setClickPosition(clickPosition, 0, diaries);
//         }
//       });
//     };

//     kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
//       makeMouseMarkerClickListener(mouseEvent);
//     });

//     const makeDiaryMarkers = (diaries) => {
//       const markers = [];
//       diaries.forEach((diary) => {
//         const hasLocation = Object.keys(diary.location).length > 0;
//         if (!hasLocation) return;
//         const { lat, lng } = diary.location;
//         const diaryMarker = new kakao.maps.Marker({
//           position: new kakao.maps.LatLng(lat, lng),
//           image: normalImage,
//         });

//         kakao.maps.event.addListener(
//           diaryMarker,
//           'click',
//           makeDiaryMarkerClickListener(diaryMarker, lat, lng),
//         );

//         kakao.maps.event.addListener(
//           diaryMarker,
//           'mouseover',
//           makeOverListener(diaryMarker),
//         );

//         kakao.maps.event.addListener(
//           diaryMarker,
//           'mouseout',
//           makeOutListener(diaryMarker),
//         );

//         markers.push(diaryMarker);
//       });
//       return markers;
//     };

//     const clusterer = new kakao.maps.MarkerClusterer({
//       map,
//       averageCenter: true,
//       minLevel: 6,
//     });

//     const diaryMarkers = makeDiaryMarkers(diaries);
//     clusterer.addMarkers(diaryMarkers);
//   };

//   useEffect(() => {
//     kakao.maps.load(() => {
//       if (Object.keys(map).length) {
//         renderMap();
//       } else {
//         const container = document.getElementById('map');
//         const options = {
//           center: new kakao.maps.LatLng(0, 0),
//           level: 6,
//         };
//         const mapContainer = new kakao.maps.Map(container, options);
//         const zoomControl = new kakao.maps.ZoomControl();
//         mapContainer.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//         const locOptions = {
//           enableHighAccuracy: true,
//           maximumAge: 0,
//           timeout: 5000,
//         };

//         const handleError = () => {
//           console.warn('에러! 현재 위치를 찾을 수 없습니다.');
//         };
//         // 현재위치
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(
//             (pos) => {
//               const lat = pos.coords.latitude;
//               const lng = pos.coords.longitude;
//               const locPosition = new kakao.maps.LatLng(lat, lng);

//               mapContainer.setCenter(locPosition);
//             },
//             handleError,
//             locOptions,
//           );
//         }
//         setMap(mapContainer);
//       }
//     });
//   }, [map]);

//   return (
//     <div className={cx('map')} id="map">
//       <div className={cx('mapSearchWrap')}>
//         <MapSearchForm searchPlaces={searchPlaces} />
//         <MapSearchList
//           removePrevPlaceMarkers={removePrevPlaceMarkers}
//           resetMarkerImage={resetMarkerImage}
//           changeMarkerInfo={changeMarkerInfo}
//         />
//       </div>
//     </div>
//   );
// };

// export default React.memo(MapComponent);

/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/MapComponent.module.scss';
import MapSearchForm from './MapSearchForm';
import MapSearchList from './MapSearchList';
import { MainContext } from '../../Context/MainContext';
import { MapContext } from '../../Context/MapContext';
const cx = classNames.bind(styles);
const { kakao } = window;
const normalImageSrc =
  'https://user-images.githubusercontent.com/67693474/87041096-ad4bd880-c22c-11ea-9f6b-c97dbc74a2d9.png';
const clickImageSrc =
  'https://user-images.githubusercontent.com/67693474/87041692-935ec580-c22d-11ea-9fbf-772878fffa18.png';
const imgSrc =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
let normalImageSize = null;
let overImageSize = null;
let clickImageSize = null;
let normalImageOption = null;
let overImageOption = null;
let clickImageOption = null;
let normalImage = null;
let overImage = null;
let clickImage = null;
kakao.maps.load(() => {
  normalImageSize = new kakao.maps.Size(50, 64);
  overImageSize = new kakao.maps.Size(55, 70);
  clickImageSize = new kakao.maps.Size(55, 70);
  normalImageOption = {
    offset: new kakao.maps.Point(0, 0),
    shape: 'poly',
    coords:
      '26, 61, 29, 58, 31, 56, 34, 54, 37, 50, 39, 47, 43, 44, 46, 41, 47, 36, 48, 30, 49, 22, 47, 17, 45, 12, 40, 7, 35, 4, 28, 2, 22, 3, 16, 4, 10, 8, 7, 12, 4, 18, 2, 24, 2, 30, 3, 35, 5, 40, 8, 44, 11, 47, 14, 48, 17, 52, 19, 55, 22, 28',
  };
  overImageOption = {
    offset: new kakao.maps.Point(0, 5),
  };
  clickImageOption = {
    offset: new kakao.maps.Point(0, 5),
    shape: 'poly',
    coords:
      '29, 67, 33, 64, 36, 60, 39, 55, 40, 53, 45, 51, 49, 48, 52, 42, 52, 35, 53, 29, 54, 24, 52, 18, 48, 13, 44, 9, 37, 5, 31, 4, 25, 4, 18, 5, 13, 9, 9, 14, 6, 19, 5, 24, 3, 29, 4, 35, 5, 42, 8, 47, 12, 50, 16, 53, 20, 56, 22, 59, 25, 63',
  };
  normalImage = new kakao.maps.MarkerImage(
    normalImageSrc,
    normalImageSize,
    normalImageOption,
  );
  overImage = new kakao.maps.MarkerImage(
    normalImageSrc,
    overImageSize,
    overImageOption,
  );
  clickImage = new kakao.maps.MarkerImage(
    clickImageSrc,
    clickImageSize,
    clickImageOption,
  );
});
let selectedDiaryMarker = null;
let selectedMouseMarker = null;
let selectedPlaceMarker = null;
let selectedPlaceInfo = null;
const resetMarkerImage = () => {
  selectedDiaryMarker && selectedDiaryMarker.setImage(normalImage);
  selectedDiaryMarker = null;
  selectedMouseMarker && selectedMouseMarker.setMap(null);
  selectedMouseMarker = null;
  selectedPlaceInfo && selectedPlaceInfo.close();
  selectedPlaceInfo = null;
};
const changeMarkerInfo = (pMarker, infoWindow, map) => {
  selectedPlaceMarker = pMarker;
  selectedPlaceInfo = infoWindow;
  selectedPlaceInfo.open(map, selectedPlaceMarker);
};
const MapComponent = () => {
  const mainContext = useContext(MainContext);
  const mapContext = useContext(MapContext);
  const { state } = mainContext;
  const { diaries } = state;
  const {
    mapState,
    setMap,
    setMessage,
    updatePlace,
    setClickPosition,
  } = mapContext;
  const { map, placeMarkers } = mapState;
  const searchPlaces = (inputs) => {
    const ps = new kakao.maps.services.Places();
    if (!inputs.replace(/^\s+|\s+$/g, '')) {
      setMessage('장소를 입력해주세요');
      return false;
    }
    ps.keywordSearch(inputs, placesSearchCB);
  };
  const removePrevPlaceMarkers = (pMarkers) => {
    pMarkers.forEach((pMarker) => {
      pMarker.setMap(null);
    });
  };
  const makePlaceMarkers = (places) => {
    const placeMarkers = [];
    const imgSize = new kakao.maps.Size(36, 37);
    const bounds = new kakao.maps.LatLngBounds();
    places.forEach((place, i) => {
      const imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, i * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      };
      const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOptions);
      const placePosition = new kakao.maps.LatLng(place.y, place.x);
      const placeMarker = new kakao.maps.Marker({
        position: placePosition,
        image: markerImg,
      });
      bounds.extend(placePosition);
      placeMarkers.push(placeMarker);
    });
    map.setBounds(bounds);
    return placeMarkers;
  };
  const displayPlaceMarkers = (pMarkers, data) => {
    pMarkers.forEach((pMarker, index) => {
      kakao.maps.event.addListener(pMarker, 'click', () => {
        const { address_name, road_address_name, x, y } = data[index];
        const name = road_address_name || address_name;
        const lat = y;
        const lng = x;
        const clickPosition = {
          name,
          lat,
          lng,
        };
        resetMarkerImage();
        const content = `<div style="padding: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span style="line-height: 15px">${name}</span>
          </div>`;
        selectedPlaceInfo = new kakao.maps.InfoWindow({ zindex: 1 });
        selectedPlaceMarker = pMarker;
        selectedPlaceInfo.setContent(content);
        selectedPlaceInfo.open(map, selectedPlaceMarker);
        setClickPosition(clickPosition, index + 1, diaries);
      });
      pMarker.setMap(map);
    });
  };
  const placesSearchCB = (data, status, pagination) => {
    removePrevPlaceMarkers(placeMarkers);
    if (status === kakao.maps.services.Status.OK) {
      const pMarkers = makePlaceMarkers(data);
      const payload = {
        places: data,
        pagination,
        placeMarkers: pMarkers,
        isSearchVisible: true,
        isPlacesVisible: true,
        message: '',
      };
      updatePlace(payload);
      displayPlaceMarkers(pMarkers, data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      const payload = {
        places: [],
        pagination: {},
        placeMarkers: [],
        isSearchVisible: true,
        isPlacesVisible: false,
        message: '검색 결과가 존재하지 않습니다.',
      };
      updatePlace(payload);
    } else if (status === kakao.maps.services.Status.ERROR) {
      setMessage('검색 결과 중 오류가 발생했습니다.');
    }
  };
  const renderMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const mouseMarker = new kakao.maps.Marker();
    const infoWindow = new kakao.maps.InfoWindow({ zindex: 1 });
    const searchDetailAddrFromCoords = (coords, callback) => {
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    };
    const makeOverListener = (marker) => () => {
      if (!selectedDiaryMarker || selectedDiaryMarker !== marker) {
        marker.setImage(overImage);
      }
    };
    const makeOutListener = (marker) => () => {
      if (!selectedDiaryMarker || selectedDiaryMarker !== marker) {
        marker.setImage(normalImage);
      }
    };
    const makeDiaryMarkerClickListener = (marker, lat, lng) => () => {
      resetMarkerImage();
      selectedDiaryMarker = marker;
      selectedDiaryMarker.setImage(clickImage);
      geocoder.coord2Address(lng, lat, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const name = result[0].road_address
            ? result[0].road_address.address_name
            : result[0].address.address_name;
          const clickPosition = {
            lat,
            lng,
            name,
          };
          setClickPosition(clickPosition, 0, diaries);
        }
      });
    };
    const makeMouseMarkerClickListener = (mouseEvent) => {
      resetMarkerImage();
      searchDetailAddrFromCoords(mouseEvent.latLng, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const name = result[0].road_address
            ? result[0].road_address.address_name
            : result[0].address.address_name;
          const clickPosition = {
            lat: mouseEvent.latLng.Ha,
            lng: mouseEvent.latLng.Ga,
            name,
          };
          const content = `<div style="padding: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span style="line-height: 15px">${name}</span>
          </div>`;
          selectedMouseMarker = mouseMarker;
          selectedPlaceInfo = infoWindow;
          mouseMarker.setMap(map);
          mouseMarker.setPosition(mouseEvent.latLng);
          infoWindow.setContent(content);
          infoWindow.open(map, mouseMarker);
          setClickPosition(clickPosition, 0, diaries);
        }
      });
    };
    kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
      makeMouseMarkerClickListener(mouseEvent);
    });
    const makeDiaryMarkers = (diaries) => {
      const markers = [];
      diaries.forEach((diary) => {
        const hasLocation = Object.keys(diary.location).length > 0;
        if (!hasLocation) return;
        const { lat, lng } = diary.location;
        const diaryMarker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          image: normalImage,
        });
        kakao.maps.event.addListener(
          diaryMarker,
          'click',
          makeDiaryMarkerClickListener(diaryMarker, lat, lng),
        );
        kakao.maps.event.addListener(
          diaryMarker,
          'mouseover',
          makeOverListener(diaryMarker),
        );
        kakao.maps.event.addListener(
          diaryMarker,
          'mouseout',
          makeOutListener(diaryMarker),
        );
        markers.push(diaryMarker);
      });
      return markers;
    };
    const clusterer = new kakao.maps.MarkerClusterer({
      map,
      averageCenter: true,
      minLevel: 6,
    });
    const diaryMarkers = makeDiaryMarkers(diaries);
    clusterer.addMarkers(diaryMarkers);
  };
  useEffect(() => {
    kakao.maps.load(() => {
      if (Object.keys(map).length) {
        renderMap();
      } else {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(0, 0),
          level: 6,
        };
        const mapContainer = new kakao.maps.Map(container, options);
        const zoomControl = new kakao.maps.ZoomControl();
        mapContainer.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        const locOptions = {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        };
        const handleError = () => {
          console.warn('에러! 현재 위치를 찾을 수 없습니다.');
        };
        // 현재위치
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const lat = pos.coords.latitude;
              const lng = pos.coords.longitude;
              const locPosition = new kakao.maps.LatLng(lat, lng);
              mapContainer.setCenter(locPosition);
            },
            handleError,
            locOptions,
          );
        }
        setMap(mapContainer);
      }
    });
  }, [map]);
  return (
    <div className={cx('map')} id="map">
      <div className={cx('mapSearchWrap')}>
        <MapSearchForm searchPlaces={searchPlaces} />
        <MapSearchList
          removePrevPlaceMarkers={removePrevPlaceMarkers}
          resetMarkerImage={resetMarkerImage}
          changeMarkerInfo={changeMarkerInfo}
        />
      </div>
    </div>
  );
};
export default React.memo(MapComponent);
