import sanitizeHtml from 'sanitize-html';
import allowedHtml from '../Util/util';

const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const initialState = {
  userData: {
    // id: 1,
    // userId: '',
    // userPw: '',
    // pic: '',
    // msg: '',
    // active: true,
  },
  diaries: [
    // {
    // id: 0,
    // title: '',
    // content: '',
    // date: getToday(),
    // location: {
    //   lat: 0,
    //   lng: 0,
    //   name: '',
    // },
    // isBookmarked: false,
    // tags: []
    // imagePaths: [],
    // },
  ],
  currentDiary: {
    id: 0,
    title: '',
    content: '',
    date: getToday(),
    location: {
      lat: 0,
      lng: 0,
      name: '',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [],
  },
  viewerDiary: {},
  allTags: [],
  editState: false,
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        diaries: action.diaries.sort((a, b) => b.id - a.id),
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: {
          state: true,
          message: action.message,
        },
        loading: false,
      };
    case 'WRITE_DIARY':
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          content: sanitizeHtml(action.write, allowedHtml),
        },
      };
    case 'SUBMIT_DIARY':
      return {
        ...state,
        diaries: [...state.diaries, state.currentDiary],
        // currentDiary: initialState.currentDiary,
      };
    case 'EDIT_DIARY':
      return {
        ...state,
        diaries: state.diaries.map((diary) =>
          diary.id === state.currentDiary.id ? state.currentDiary : diary,
        ),
        editState: false,
      };
    case 'DELETE_DIARY':
      return {
        ...state,
        diaries: state.diaries.filter((diary) => diary.id !== action.id),
      };
    case 'WRITE_TITLE':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, title: action.write },
      };
    case 'PUSH_IMG':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, imagePaths: action.images },
      };
    case 'PUSH_DIARY_ID':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, id: state.diaries.length + 1 },
      };
    case 'GET_DIARY_BY_ID':
      return {
        ...state,
        viewerDiary: action.diary,
      };
    case 'CLEAR_CURRENTDIARY':
      return {
        ...state,
        currentDiary: initialState.currentDiary,
      };
    case 'CLEAR_VIEWERDIARY':
      return {
        ...state,
        viewerDiary: {},
      };
    case 'GET_USER_DATA':
      return {
        ...state,
        userData: { ...action.data, active: true },
      };

    case 'TOGGLE_BOOKMARK':
      return {
        ...state,
        diaries: state.diaries.map((diary) => {
          return +diary.id === +action.id
            ? { ...diary, isBookmarked: !diary.isBookmarked }
            : diary;
        }),
        viewerDiary: !state.viewerDiary.id
          ? {}
          : { ...state.viewerDiary, isBookmarked: action.isBookmarked },
      };
    case 'LOG_OUT':
      // return initialState;
      return {
        ...state,
        userData: {},
      };
    case 'CHANGE_DATE':
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          date: action.date,
        },
      };
    case 'CHANGE_LOCATION':
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          location: action.location,
        },
      };
    case 'SET_EDIT_STATE':
      return {
        ...state,
        currentDiary: state.viewerDiary,
        editState: true,
      };
    case 'EDIT_PROFILE':
      return {
        ...state,
        userData: { ...state.userData, msg: action.msg, pic: action.pic },
      };
    case 'PUSH_TAG':
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          tags: state.currentDiary.tags.concat(action.tag),
          allTags: state.allTags.concat(action.tag),
        },
      };
    case 'GET_ALL_TAGS':
      return {
        ...state,
        allTags: (() => {
          let arr = [];
          state.diaries.forEach(({ tags }) => {
            tags.forEach((tag) => {
              if (arr.some((v) => v.name === tag)) {
                arr = arr.map((v) =>
                  v.name === tag ? { ...v, count: v.count + 1 } : v,
                );
                return;
              }
              arr.push({ key: arr.length + 1, name: tag, count: 1 });
            });
          });
          return arr;
        })(),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, mainReducer };
