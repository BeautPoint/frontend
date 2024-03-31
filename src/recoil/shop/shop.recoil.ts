import {navigationState} from '@/recoil/navigation/navigation.recoil';
import {NavigationProps} from './../../types/stackprops';
import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const shopState = atom({
  key: `shopState/${randomString()}`,
  default: {
    previewFullScreen: false,
    isButtonPressed: false,
    BriefReviewList: [
      {
        id: 'brief-0',
        description: '친절하고 서비스가 좋아요',
        isSelected: false,
      },
      {
        id: 'brief-1',
        description: '분위기가 편한하고 좋아요',
        isSelected: false,
      },
      {id: 'brief-2', description: '깨끗하고 위생이 좋아요', isSelected: false},
      {
        id: 'brief-3',
        description: '인테리어와 시설이 좋아요',
        isSelected: false,
      },
      {id: 'brief-4', description: '가성비가 좋아요', isSelected: false},
    ],
    briefReviewData: [] as {reviewId: ''; description: ''}[],
    navigate: () => {},
    reviewRating: [
      {id: 0, rating: 1, isActived: false},
      {id: 1, rating: 2, isActived: false},
      {id: 2, rating: 3, isActived: false},
      {id: 3, rating: 4, isActived: false},
      {id: 4, rating: 5, isActived: false},
    ],
    detailReviewData: {rating: 0, textReview: ''},
    selectedShop: {name: '', address: '', photo: ''},
  },
});

export default shopState;
