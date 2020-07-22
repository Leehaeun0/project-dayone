/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faSearch,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkLine } from '@fortawesome/free-regular-svg-icons';
import styles from './Style/Tags.module.scss';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const Tags = () => {
  const { name } = useParams();
  const history = useHistory();
  const { state, patchBookmark } = useContext(MainContext);
  const { diaries, allTags } = state;

  const taggedDiaries = diaries.filter((diary) => diary.tags.includes(name));
  const [inputState, setInputState] = useState('');
  console.log('test', diaries);

  useEffect(() => {
    console.log('diaries', diaries);
  }, []);

  const onChange = (e) => {
    setInputState(e.target.value);
  };

  const onSearch = (e) => {
    const writeInput = e.target.type === 'text' && e.keyCode !== 13;
    if (inputState.trim() === '') {
      if (writeInput) return;
      setInputState('');
      return;
    }
    if (writeInput) return;
    history.push(`/tags/${inputState.trim()}`);
    setInputState('');
  };

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  const renderDiaries = () =>
    taggedDiaries.map((v) => (
      <article key={v.id} className={cx('diary')}>
        <h3>{v.title}</h3>
        <Link to={`/diaryViewer/${v.id}`}>
          {v.imagePaths[0] ? <img src={v.imagePaths[0]} alt={v.title} /> : ''}
        </Link>
        <time dateTime={v.date}>{v.date}</time>
        <p>{sanitizeHtml(v.content, { allowedTags: [] })}</p>
        <div className={cx('tags')}>
          {v.tags.map((tag, i) => (
            <span key={i} className={cx('tag', { searchTag: tag === name })}>
              {`#${tag}`}
            </span>
          ))}
        </div>
        <input
          id={v.id}
          type="checkbox"
          checked={v.isBookmarked ? 'checked' : ''}
          onChange={onChangeBookmark}
        />
        <label htmlFor={v.id}>
          <FontAwesomeIcon
            icon={v.isBookmarked ? faBookmark : faBookmarkLine}
          />
        </label>
      </article>
    ));

  const renderTags = () => {
    return allTags.map(({ key, name: tag, count }) => (
      <li className={cx('tagMenu')} key={key}>
        <Link to={`/tags/${tag}`}>
          <FontAwesomeIcon icon={faHashtag} />
          <span className={cx('tagMenuName')}>{tag}</span>
          <span className={cx('count')}>{`(${count})`}</span>
        </Link>
      </li>
    ));
  };

  return (
    <>
      <h2 className={cx('title')}>
        <span className={cx('tagName')}>{`#${name}`}</span>
        검색 결과
      </h2>
      <input
        className={cx('searchInput')}
        type="text"
        onKeyDown={onSearch}
        onChange={onChange}
        value={inputState}
      />
      <button type="button" className={cx('searchBtn')} onClick={onSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <aside className={cx('tagAside')}>
        <ul className={cx('tagMenuList')}>{renderTags()}</ul>
      </aside>
      <div className={cx('wrapDiaries')}>{renderDiaries()}</div>
    </>
  );
};

export default React.memo(Tags);
