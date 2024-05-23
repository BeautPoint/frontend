import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const communityState = atom({
  key: `communityState/${randomString()}`,
  default: {
    tabSelector: [
      {id: 0, name: '전체보기'},
      {id: 1, name: '톡톡'},
      {id: 2, name: '정보'},
      {id: 3, name: '입소문'},
    ],
    isEditMode: false,
    isDetailScreen: false,
    selectedTab: '전체보기',
    likeButton: '' as string | number,
    showReportDropdown: null as number | null,
    detailPostApi: {
      post_id: '',
      content: '',
      title: '',
      viewCount: 0,
      nickName: '',
      profile_image: '',
      createdAt: Date,
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
      content: '',
      postCategory: [],
      serviceCategory: [],
    },
    editPostData: {
      post_id: '',
      title: '',
      content: '',
    },
    userPosts: [
      {
        post_id: '',
        category_id: null,
        title: '',
        content: '',
        views: null,
        createdAt: '',
        nickName: '',
        profile_image: null,
      },
    ],
  },
});

export default communityState;
