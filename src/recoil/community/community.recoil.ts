import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const communityState = atom({
  key: `communityState//${randomString()}`,
  default: {
    tabSelector: [
      {id: 0, name: '전체보기'},
      {id: 1, name: '톡톡'},
      {id: 2, name: '정보'},
      {id: 3, name: '입소문'},
    ],
    selectedTab: '전체보기',
    likeButton: '' as string | number,
    showReportDropdown: null as number | null,
    detailPostApi: {
      id: 0,
      description: '',
      nickname: '',
      title: '',
      viewCount: 0,
    },
    postCategoies: [
      {id: 0, postCategory: '정보'},
      {id: 1, postCategory: '고민'},
      {id: 2, postCategory: '자유게시글'},
    ],
    serviceCategoies: [
      {id: 3, serviceCategory: 'SMP두피'},
      {id: 4, serviceCategory: '이마라인'},
      {id: 5, serviceCategory: '아이라인'},
      {id: 6, serviceCategory: '눈썹'},
      {id: 7, serviceCategory: '입술'},
      {id: 8, serviceCategory: '흉터'},
      {id: 9, serviceCategory: '반영구제거'},
      {id: 10, serviceCategory: '기타'},
    ],
    selectedPostCategory: {postCategory: [], serviceCategory: []},
    createPostData: {
      title: '',
      description: '',
      postCategory: [],
      serviceCategory: [],
    },
  },
});

export default communityState;
