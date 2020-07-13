import React, { useRef, useEffect, useContext } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryWrite.module.scss';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryWrite = () => {
  const { writePost, pushImg } = useContext(MainContext);
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '일기를 적어보세요',
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ['image'],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link'],
        ],
      },
      // formats: [
      //   'header',
      //   'font',
      //   'size',
      //   'image',
      //   'bold',
      //   'italic',
      //   'underline',
      //   'strike',
      //   'ordered',
      //   'bullet',
      //   'list',
      //   'blockquote',
      //   'link',
      // ],
    });

    // Quill - text change event 감지
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        writePost(quill.root.innerHTML);
      }
    });
  }, []);

  const onBlur = () => {
    const children = [...quillInstance.current.root.children];
    const images = [];

    children.forEach((child) => {
      if (![...child.children].some((v) => v.nodeName === 'IMG')) return;

      [...child.children].forEach((v) => {
        if (v.nodeName !== 'IMG') return;
        images.push(v.src);
      });
    });
    // console.log(images);
    pushImg(images);
  };

  return <div className={cx('writer')} ref={quillElement} onBlur={onBlur} />;
};

export default DiaryWrite;
