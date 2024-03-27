import shopState from '@/recoil/shop/shop.recoil';
import {useRecoilState} from 'recoil';
function useShopDetails() {
  const [state, setState] = useRecoilState(shopState);

  const BriefReviewCheckBoxHandle = (reviewId: string, description: string) => {
    setState(prevState => {
      const updatedBriefReviewList = prevState.BriefReviewList.map(item => {
        if (item.id === reviewId) {
          // 현재 item의 isSelected 값을 반전시킵니다.
          return {...item, isSelected: !item.isSelected};
        }
        return item;
      });

      const selectedBriefReview = prevState.briefReviewData.some(
        item => item.reviewId === reviewId,
      );

      const updatedBriefReviewData = selectedBriefReview
        ? prevState.briefReviewData.filter(item => item.reviewId !== reviewId)
        : [...prevState.briefReviewData, {reviewId, description}];

      return {
        ...prevState,
        BriefReviewList: updatedBriefReviewList,
        briefReviewData: updatedBriefReviewData,
      };
    });
  };

  /** reviewRatingHandle - 별점 버튼 클릭시 별점을 활성화 하는 함수
   *
   * - 클릭한 별점에 따라 Recoil reviewRating 상태를 업데이트
   *
   * - 클릭된 별점 id 이하의 모든 별점 항목의 isActived 상태를 true로 설정
   *
   * - 또한 클릭한 id의 rating 중 최대 평점을 계산하여 reviewData 상태의
   * rating에 적용
   * */

  const reviewRatingHandle = (clickId: number) => {
    setState(prevState => {
      const updatedReviewRating = prevState.reviewRating.map(item => {
        return {
          ...item,
          isActived: item.id <= clickId,
        };
      });
      const maxRating = Math.max(
        ...updatedReviewRating
          .filter(item => item.isActived)
          .map(item => item.rating),
      );
      return {
        ...prevState,
        reviewRating: updatedReviewRating,
        detailReviewData: {...prevState.detailReviewData, rating: maxRating},
      };
    });
  };

  const reviewDataHandle = (data: string) => {
    setState(prevState => ({
      ...prevState,
      detailReviewData: {...prevState.detailReviewData, textReview: data},
    }));
  };

  /** resetReviewData - 완료 버튼 클릭시 리뷰 내용이 API 요청 보내지면서,
   * 초기화 되는 함수
   *
   */

  const resetReviewData = () => {
    //reviewRating isactived false로 바꿔야 함.
    setState(prevState => {
      const updatedReviewRating = prevState.reviewRating.map(item => ({
        ...item,
        isActived: false,
      }));

      const updatedBriefReviewList = prevState.BriefReviewList.map(item => ({
        // 현재 item의 isSelected 값을 반전시킵니다.
        ...item,
        isSelected: false,
      }));

      return {
        ...prevState,
        reviewRating: updatedReviewRating,
        reviewData: {rating: 0, textReview: ''},
        BriefReviewList: updatedBriefReviewList,
        briefReviewData: [],
      };
    });
  };

  return {
    BriefReviewCheckBoxHandle,
    reviewRatingHandle,
    reviewDataHandle,
    resetReviewData,
  };
}

export {useShopDetails};
