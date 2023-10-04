export interface IProject {
  _id: number
  heading: string
  description: string
  information: string[]
  imageUrls: string[]
  tools: string[]
  details: string[]
  github?: string
  video?: string
  link?: string
  isDeploy?: boolean
}
export const projects: IProject[] = [
  {
    _id: 1000,
    heading: 'UI Component',
    description: '내가 쓰려고 만든 UI 모음',
    information: [
      '디자인이 정의되지 않은 다른 사이드 프로젝트에서 퍼블리싱 시간을 단축시키기 위한 보편적인 UI Component 모듈',
      '모바일, 테블릿 반응형',
      'Accordion, Dropdown',
      'Navigation Header, Progress Bar, Setting Bar, Toggle Bar',
      'Card, Carousel, InputBox, Button, Icon',
      'Popup Modal, Drawer',
      'Loading Spinner, etc.',
    ],
    imageUrls: [
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1687019378/post/ui-component_birali.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1687019378/post/ui-component_1_whvpcj.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1687019378/post/ui-component_2_u5ujfj.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1687019378/post/ui-component_3_zokaqc.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1687019378/post/ui-component_4_al9aqf.jpg',
    ],
    tools: ['React', 'TypeScript', 'Vite', 'StoryBook', 'Yarn2', 'Sass'],
    details: [],
    github: 'https://github.com/SH-Won/react-component',
    video: '',
    link: '',
    isDeploy: false,
  },
  {
    _id: 1001,
    heading: 'TMDB',
    description: '영화,TV 정보를 보고 검색하는 사이트',
    information: [
      'tmdb api 를 이용하여 영화/TV 프로그램/인물 검색, 필터, 즐겨찾기 추가,해제',
      '잠재적인 다국어 지원을 위해 i18next 도입',
      'react-query 를 통해 데이터 캐싱',
      'firebase 로그인',
      '모바일, 테블릿 반응형',
    ],
    imageUrls: [
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441206/post/tmdb_1_cg2xe8.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_2_frii4z.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_3_bk05bt.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_4_lb1qsc.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_55_umywrq.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_66_knxwsa.jpg',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1696441207/post/tmdb_77_d9asbz.jpg',
    ],
    tools: ['React', 'TypeScript', 'react-query', 'Vite', 'Yarn2', 'i18next', 'Sass'],
    details: [],
    github: 'https://github.com/SH-Won/tmdb',
    video: '',
    link: 'https://tmdb-sh-won.vercel.app',
    isDeploy: true,
  },
  {
    _id: 1002,
    heading: 'SH Blog',
    description: '개인 개발 블로그',
    information: [
      'Vanilla JavaScript 로 SPA 구현',
      'WYSIWYG 에디터 (Quill) 을 커스텀하여 이미지를 포함한 글 작성',
      '기본 CRUD',
      'Webpack Dynamic Import 와 사용한 라이브러리의 필요한 모듈만 사용하여 번들 사이즈 최소화',
    ],
    imageUrls: [
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1658565409/shblog1_sweccv.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1658565409/shblog2_xlvobe.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1658565409/shblog3_gicxye.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1658565408/shblog4_lmgypr.png',
    ],
    tools: ['JavaScript', 'Webpack', 'quill', 'express', 'mongoose', 'cloudinary'],
    details: [],
    github: 'https://github.com/SH-Won/SH-blog',
    video: '',
    link: 'https://blog-sh.vercel.app',
    isDeploy: false,
  },
  {
    _id: 1003,
    heading: 'Food Mall',
    description: '학습을 위한 쇼핑몰',
    information: [
      'Webpack 을 통한 React 환경설정',
      'React 함수형 컴포넌트 작성',
      'React Router 사용하여 페이지 이동 처리',
      'Redux 를 사용하여 상태관리',
      '댓글,장바구니(목록,수량,총가격)',
    ],
    imageUrls: [
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall0_tbsuy4.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall01_mg3cwf.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049453/gallery/mall1_dim5he.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049452/gallery/mall2_twhpmq.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall3_soqbu6.png',
    ],

    tools: ['React', 'Redux', 'Webpack', 'express', 'mongoose'],
    details: [],
    github: 'https://github.com/SH-Won/FoodMall',
    video: '',
    link: '',
    isDeploy: false,
  },
  {
    _id: 1004,
    heading: 'Come to Mind',
    description: '잡동사니',
    information: ['3D 캐러셀 구현', '마우스 드래그 드랍을 이용한 퍼즐게임', '고전 테트리스 게임'],
    imageUrls: [
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938619/gallery/3Dcarousel_ztpflw.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938620/gallery/puzzle_nuwpwh.png',
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938618/gallery/tetris_ecyoag.png',
    ],
    tools: ['HTML', 'CSS', 'JavaScript'],
    details: [],
    github: 'https://github.com/SH-Won/come-to-mind',
    link: '',
    isDeploy: false,
  },
]
