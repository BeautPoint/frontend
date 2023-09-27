import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const shopState = atom({
  key: `shopState/${randomString()}`,
  default: {
    previewFullScreen: false,
    isButtonPressed: false,
    BriefReviewList: [
      {id: 0, description: '친절하고 서비스가 좋아요'},
      {id: 1, description: '분위기가 편한하고 좋아요'},
      {id: 2, description: '깨끗하고 위생이 좋아요'},
      {id: 3, description: '인테리어와 시설이 좋아요'},
      {id: 4, description: '가성비가 좋아요'},
      {id: 5, description: ''},
      {id: 6, description: ''},
    ],
  },
});

export default shopState;
