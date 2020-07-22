/* eslint-disable no-case-declarations */
export const mapInitState = {
  map: {},
  sublist: [],
  places: [],
  pagination: {},
  placeMarkers: [],
  isSearchVisible: false,
  isPlacesVisible: false,
  message: '',
  clickPosition: {
    lat: 0,
    lng: 0,
    name: '',
  },
  activeId: 0,
};

export const mapReducer = (state, action) => {
  const {
    map,
    sublist,
    places,
    pagination,
    placeMarkers,
    isSearchVisible,
    isPlacesVisible,
    message,
    clickPosition,
    activeId,
  } = action.payload;
  switch (action.type) {
    case 'SET_MAP':
      return {
        ...state,
        map,
      };
    case 'SET_SUBLIST':
      return {
        ...state,
        sublist,
        clickPosition,
        activeId,
      };
    case 'SET_PLACES':
      return {
        ...state,
        places,
      };
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination,
      };
    case 'SET_PLACEMARKERS':
      return {
        ...state,
        placeMarkers,
      };
    case 'SET_SEARCH_VISIBLE':
      return {
        ...state,
        isSearchVisible,
      };
    case 'SET_SEARCH_HIDDEN':
      return {
        ...state,
        isSearchVisible,
        isPlacesVisible,
      };
    case 'SET_PLACES_VISIBLE':
      return {
        ...state,
        isPlacesVisible,
      };

    case 'SET_MESSAGE':
      return {
        ...state,
        message,
      };
    case 'UPDATE_PLACE':
      return {
        map: state.map,
        sublist: state.sublist,
        places,
        pagination,
        placeMarkers,
        isSearchVisible,
        isPlacesVisible,
        message,
        clickPosition: {},
        activeId: 0,
      };
    case 'SET_CLICK_POSITION':
      return {
        ...state,
        clickPosition,
        activeId,
        sublist,
      };
    case 'CLEAR_CLICK_POSITION':
      return {
        ...state,
        clickPosition: {},
      };
    case 'SET_ACTIVE_ID':
      return {
        ...state,
        clickPosition,
        sublist,
        activeId,
      };
    default:
      return state;
  }
};
