import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import TimeLine from '../Page/TimeLine';
import Calendar from '../Page/Calendar';
import Map from '../Page/Map';
import Diary from '../Page/Diary';
import DiaryViewer from '../Page/DiaryViewer';
import MyPage from '../Page/MyPage';
import Login from '../Page/Login';
import Tags from '../Page/Tags';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={TimeLine} exact />
      <Route path="/timeline" component={TimeLine} />
      <Route path="/timeline/:nav" component={TimeLine} />
      <Route path="/map" component={Map} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/diary" component={Diary} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/tags/:name" component={Tags} />
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
      <Route
        render={({ location }) => (
          <div>
            <h2 style={{ display: 'inline' }}>
              이 페이지는 존재하지 않습니다:
            </h2>
            <span>{` ${location.pathname}`}</span>
            <p>주소 다시 검색해 이새끼야!!!</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
