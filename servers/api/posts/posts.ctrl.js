const diaries = [
  {
    id: 1,
    title: '스터디룸에서 열공하는 우리들',
    content:
      '<p>스터디룸에서 초집중하고 있는 초록머리 조커와 뭔가 심각하게 의논을 나누고 있는 하으니랑 지미주! 이정도로 열심히 하는데 이력서 내면 뽑아 주세요!</p>',
    date: '2020-5-14',
    location: {
      lat: 37.544071338343684,
      lng: 127.05670254932802,
      name: '"서울특별시 성동구 아차산로 116"',
    },
    isBookmarked: true,
    tags: ['스터디', '프론트엔드', '프로젝트', 'DAY_ONE'],
    imagePaths: [],
  },
  {
    id: 2,
    title: 'Diary Title 2',
    content: '<p>This is diary 2</p>',
    date: '2020-5-21',
    location: {
      lat: 37.620842424005616,
      lng: 127.1583774403176,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['오늘일기'],
    imagePaths: [],
  },
  {
    id: 3,
    title: 'Diary Title 3',
    content: '<p>This is diary 3</p>',
    date: '2020-5-21',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: true,
    tags: [],
    imagePaths: [],
  },
  {
    id: 4,
    title: 'Diary Title 4',
    content: '<p>This is diary 4</p>',
    date: '2020-6-2',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [],
  },
  {
    id: 5,
    title: 'Diary Title 5',
    content: '<p>This is diary 5</p>',
    date: '2020-6-6',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: true,
    tags: [],
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 6,
    title: 'Diary Title 6',
    content: '<p>This is diary 6</p>',
    date: '2020-6-15',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: true,
    tags: [],
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 7,
    title: 'Diary Title 7',
    content: '<p>This is diary 7</p>',
    date: '2020-6-19',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 8,
    title: 'Diary Title 8',
    content: '<p>This is diary 8</p>',
    date: '2020-6-19',
    location: {
      lat: 37.524915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: true,
    tags: [],
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 9,
    title: 'Diary Title 9',
    content: '<p>This is diary 9</p>',
    date: '2020-7-1',
    location: {
      lat: 37.444915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://cdn.dribbble.com/users/373152/screenshots/2056489/slice_2_1x.png',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 10,
    title: 'Diary Title 10',
    content: '<p>This is diary 10</p>',
    date: '2020-7-4',
    location: {
      lat: 37.444915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://takashimaeda.jp/wp-content/uploads/2016/02/nasulog_dayone2_banner.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 11,
    title: 'Diary Title 11',
    content: '<p>This is diary 11</p>',
    date: '2020-7-4',
    location: {
      lat: 37.624915253753194,
      lng: 127.15122688059974,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://images.techhive.com/images/article/2016/03/day-one-mac-icon-100649205-large.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 12,
    title: 'Diary Title 12',
    content: '<p>This is diary 12</p>',
    date: '2020-7-5',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://pbs.twimg.com/profile_images/694312120272318464/iFZU5oBJ_400x400.png',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 13,
    title: 'Diary Title 13',
    content: '<p>This is diary 13</p>',
    date: '2020-7-9',
    location: {},
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/06/10054036/1st-300x198.png',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 14,
    title: 'Diary Title 14',
    content: '<p>This is diary 14</p>',
    date: '2020-7-13',
    location: {},
    isBookmarked: false,
    tags: [],
    imagePaths: [
      'data:image/png;base64,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',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 15,
    title: 'Diary Title 15',
    content: '<p>This is diary 15</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 16,
    title: 'Diary Title 16',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 17,
    title: 'Diary Title 17',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 18,
    title: 'Diary Title 18',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 19,
    title: 'Diary Title 19',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 20,
    title: 'Diary Title 20',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 21,
    title: 'Diary Title 22',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 22,
    title: 'Diary Title 22',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 23,
    title: '스터디룸에서 열공하는 우리들',
    content:
      '<img src="https://i.ibb.co/fFk7r0G/image1.jpg"/><br/><br/><p>스터디룸에서 초집중하고 있는 초록머리 조커와 뭔가 심각하게 의논을 나누고 있는 하으니랑 지미주! 이정도로 열심히 하는데 이력서 내면 뽑아주세요!!!</p>',
    date: '2020-6-14',
    location: {
      lat: 37.54408034289898,
      lng: 127.05671387176385,
      name: '서울 성동구 아차산로 116',
    },
    isBookmarked: true,
    tags: ['스터디', '프론트엔드', '프로젝트', 'DAY_ONE'],
    imagePaths: ['https://i.ibb.co/fFk7r0G/image1.jpg'],
  },
  {
    id: 24,
    title: 'Diary Title 24',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  {
    id: 25,
    title: 'Diary Title 25',
    content: '<p>This is diary 16</p>',
    date: '2020-7-13',
    location: {
      lat: 37.62197524055062,
      lng: 127.16017523675508,
      name: '서울 성동구 성수동 2가',
    },
    isBookmarked: false,
    tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
    imagePaths: [
      'https://images3.alphacoders.com/105/1052299.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
  },
  // {
  //   id: 26,
  //   title: 'Diary Title 26',
  //   content: '<p>This is diary 16</p>',
  //   date: '2020-7-13',
  //   location: {
  //     lat: 37.62197524055062,
  //     lng: 127.16017523675508,
  //     name: '서울 성동구 성수동 2가',
  //   },
  //   isBookmarked: false,
  //   tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
  // {
  //   id: 27,
  //   title: 'Diary Title 27',
  //   content: '<p>This is diary 16</p>',
  //   date: '2020-7-13',
  //   location: {
  //     lat: 37.62197524055062,
  //     lng: 127.16017523675508,
  //     name: '서울 성동구 성수동 2가',
  //   },
  //   isBookmarked: false,
  //   tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
  // {
  //   id: 28,
  //   title: 'Diary Title 28',
  //   content: '<p>This is diary 16</p>',
  //   date: '2020-7-13',
  //   location: {
  //     lat: 37.62197524055062,
  //     lng: 127.16017523675508,
  //     name: '서울 성동구 성수동 2가',
  //   },
  //   isBookmarked: false,
  //   tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
  // {
  //   id: 29,
  //   title: 'Diary Title 29',
  //   content: '<p>This is diary 16</p>',
  //   date: '2020-7-13',
  //   location: {
  //     lat: 37.62197524055062,
  //     lng: 127.16017523675508,
  //     name: '서울 성동구 성수동 2가',
  //   },
  //   isBookmarked: false,
  //   tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
  // {
  //   id: 30,
  //   title: 'Diary Title 30',
  //   content: '<p>This is diary 16</p>',
  //   date: '2020-7-13',
  //   location: {
  //     lat: 37.62197524055062,
  //     lng: 127.16017523675508,
  //     name: '서울 성동구 성수동 2가',
  //   },
  //   isBookmarked: false,
  //   tags: ['태그를', '달자', 'test', '태그를', '달자', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
  // {
  //   id: 31,
  //   title:
  //     'Diary Title 31 testtestestsetsteststsetestsetset aregeargaegaeragrara',
  //   content:
  //     '<p>This is diary 16 testtestestsetsteststsetestsetsetesttestestsetsteststsetestsetsettesttestestsetsteststsetestsetsettesttestestsetsteststsetestsetdijfdao;sijfosijfsioafjoasjfisdojfioasjfios;dfjset</p>',
  //   date: '2020-7-13',
  //   location: {},
  //   isBookmarked: false,
  //   tags: ['태그를', 'test', '태그를', 'test'],
  //   imagePaths: [
  //     'https://images3.alphacoders.com/105/1052299.jpg',
  //     'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
  //   ],
  // },
];

let diaryId = diaries.length;

/* 전체 diary list 조회
GET /api/posts
*/
exports.list = (ctx) => {
  ctx.body = diaries;
};

/* 새로운 diary 작성
POST /api/posts
{ _id, title, body, date, location }
*/
exports.write = (ctx) => {
  // REST API의 Requiest Body는 ctx.request.body에서 조회 가능
  const {
    id,
    title,
    content,
    date,
    location,
    isBookmarked,
    tags,
    imagePaths,
  } = ctx.request.body;
  diaryId += 1;
  const diary = {
    id,
    // id: diaryId,
    title,
    content,
    date,
    location,
    isBookmarked,
    tags,
    imagePaths,
  };
  diaries.push(diary);
  ctx.body = diary;
};

/* 특정 다이어리 조회
GET /api/posts/:id
*/
exports.read = (ctx) => {
  const { id } = ctx.params;
  // 주어진 id값으로 diary 찾기
  // 파라미터로 받아 온 값은 문자열 형식
  // 파라미터를 숫자로 변환 또는 비교할 d.id 값을 문자열로 변경
  const diary = diaries.find((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (!diary) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = diary;
};

/* 특정 다이어리 제거
DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
  const { id } = ctx.params;
  // 제거할 diary의 id를 찾기
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // index번째 diary 제거
  diaries.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 특정 다이어리 수정(특정 부분 수정)
PATCH /api/posts/:id
{ title, body, date, location }
*/
exports.update = (ctx) => {
  // 특정 부분만 수정(교체)
  const { id } = ctx.params;
  // 해당 id를 가진 diary를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  diaries[index] = {
    ...diaries[index],
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};

/* 특정 다이어리 수정(교체)
PUT /api/posts/:id
{ title, body, date, location }
*/
exports.replace = (ctx) => {
  // 전체 다이어리 정보를 입력하여 데이터를 통째로 교체
  const { _id, id } = ctx.params;
  // 해당하는 id를 가진 다이어리를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // 전체 diaries를 덮어 씌움
  // _id, id를 제외한 기본 정보를 날리고, 객체를 새로 생성
  diaries[index] = {
    _id,
    id,
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};
