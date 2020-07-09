import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Login.module.scss';

const cx = classNames.bind(styles);

const Login = ({ state, dispatch }) => {
  const { id, password } = state.inputs;
  const { isLoggedIn } = state;
  console.log('login', isLoggedIn);
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'USER_CHECK' });
    dispatch({ type: 'RESET_INPUT' });
  };

  return (
    <div className={cx('loginWrapper')}>
      <h1>DAY ONE</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          value={id}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
        />
        <span className={cx('message')}>
          {isLoggedIn
            ? '가입하지 않은 아이디이거나, 잘못된 비밀번호 입니다.'
            : ''}
        </span>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
