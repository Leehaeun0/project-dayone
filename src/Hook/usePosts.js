import { useEffect, useReducer } from 'react';
import Api from '../Api/Api';
import { initialState, mainReducer } from '../Reducer/mainReducer';

const usePosts = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const diaries = await Api.getDiaries();
      // console.log('diaries:', diaries);
      dispatch({ type: 'SUCCESS', diaries });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const submitDiaryToServer = async () => {
    try {
      await Api.postDiaries(state.currentDiary);
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const getDiary = async (id) => {
    // state에 다이어리 정보가 있는 경우
    const stateDiary = state.diaries.find((v) => v.id === +id);
    if (stateDiary) {
      dispatch({ type: 'GET_DIARY_BY_ID', diary: stateDiary });
      return;
    }
    // state에 다이어리 정보가 없어서 서버요청 갔다와야 하는 경우
    try {
      const diary = await Api.getDiaryById(id);
      dispatch({ type: 'GET_DIARY_BY_ID', diary });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const deleteDiaryFromServer = async (id) => {
    try {
      await Api.deleteDiary(id);
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const patchBookmark = async (id, isBookmarked) => {
    // id = diary.id;
    // isBookmarked = e.target.checked;
    dispatch({ type: 'TOGGLE_BOOKMARK', id, isBookmarked });

    try {
      await Api.patchDiaries({ id, isBookmarked });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const writePost = (write) => {
    dispatch({ type: 'WRITE_POST', write });
  };

  const submitDiary = () => {
    dispatch({ type: 'SUBMIT_POST' });
    submitDiaryToServer();
  };

  const deleteDiary = (id) => {
    dispatch({ type: 'DELETE_DIARY', id });
    deleteDiaryFromServer(id);
  };

  const writeTitle = (write) => {
    dispatch({ type: 'WRITE_TITLE', write });
  };

  const pushImg = (images) => {
    dispatch({ type: 'PUSH_IMG', images });
  };

  const pushDiaryId = () => {
    dispatch({ type: 'PUSH_DIARY_ID' });
  };

  const clearViewerDiary = () => {
    dispatch({ type: 'CLEAR_VIEWERDIARY' });
  };

  const bookmarkDiary = (id, isBookmarked) => {
    dispatch({
      type: 'TOGGLE_BOOKMARK',
      id,
      isBookmarked,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [
    state,
    dispatch,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
    pushDiaryId,
    getDiary,
    clearViewerDiary,
    bookmarkDiary,
    patchBookmark,
    deleteDiary,
  ];
};

export default usePosts;
