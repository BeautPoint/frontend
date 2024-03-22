import NavigationHeader from '@/components/common/navigationHeader';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detail/detailReview.style';
import {NavigationProps} from '@/types/stackprops';
import {Fragment} from 'react';
import GrayStarIcon from '@/assets/icons/shopDetail/grayStar.svg';
import StarIcon from '@/assets/icons/shopDetail/colorStar.svg';
import ColorStarIcon from '@/assets/icons/shopDetail/colorStar.svg';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';
import {useShopDetails} from '@/hooks/shop/shopDetail.hook';

function DetailReviewScreen({navigation}: NavigationProps['shopDetails']) {
  const {reviewRating, detailReviewData} = useRecoilValue(shopState);
  const {reviewRatingHandle, reviewDataHandle} = useShopDetails();

  const isReviewData = Object.values(detailReviewData).every(
    value => value !== '',
  );

  console.log(detailReviewData);

  return (
    <Fragment>
      <NavigationHeader
        navigation={navigation}
        title={'글쓰기'}
        isActived={isReviewData}
        url="detail"
      />
      <S.DetailReviewLayout>
        <S.TitleSection>
          <S.ReviewTitle>
            <AppText size="18px" weight="Semibold">
              리뷰를 작성해주세요
            </AppText>
          </S.ReviewTitle>
          <S.SubTitle>
            <AppText color="#717984">만족하시는 만큼 별점을 남겨주세요</AppText>
          </S.SubTitle>
        </S.TitleSection>
        <S.ReviewRating>
          {reviewRating.map(item => (
            <S.RatingButton
              key={item.id}
              onPress={() => reviewRatingHandle(item.id)}>
              <S.RatingIcon>
                {item.isActived ? <StarIcon /> : <GrayStarIcon />}
              </S.RatingIcon>
            </S.RatingButton>
          ))}
        </S.ReviewRating>
        <S.Description>
          <S.TextReviewTitle>
            <AppText size="16px" weight="SemiBold">
              자세한 후기를 남겨보세요
            </AppText>
          </S.TextReviewTitle>
          <S.TextForm
            textAlignVertical="top"
            multiline={true}
            placeholder="본문을 입력해주세요."
            onChangeText={text => reviewDataHandle(text)}
          />
        </S.Description>
      </S.DetailReviewLayout>
    </Fragment>
  );
}

export default DetailReviewScreen;
