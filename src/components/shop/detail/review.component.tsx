import shopState from '@/recoil/shop/shop.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detail/review.style';
import {useRecoilValue} from 'recoil';
import CommentIcon from '@/assets/icons/shopDetail/commentIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import BriefReviewScreen from '../review/briefReview.component';
import ReviewScreen from '../review/detailReview.component';
import {useAuthHook} from '@/hooks/auth/auth.hook';

interface ShopReviewProps {
  navigation: NavigationProps['home' | 'serviceList']['navigation'];
}

function ShopReview({navigation}: ShopReviewProps) {
  const {BriefReviewList} = useRecoilValue(shopState);
  const showScreen = false;
  const {accessToken} = useAuthHook();

  const handleWriteReview = (reviewType: 'BriefReiview' | 'DetailReiview') => {
    if (!accessToken) {
      return navigation.navigate('Login');
    }
    navigation.navigate(reviewType);
  };

  return (
    <S.ReviewLayout>
      <S.BriefReview>
        <S.TitleBox>
          <AppText size="15px" weight="SemiBold">
            이런 점이 좋았어요
          </AppText>
          <S.ActionButton onPress={() => handleWriteReview('BriefReiview')}>
            <S.IconBox>
              <CommentIcon />
            </S.IconBox>
            <AppText>나도 참여</AppText>
          </S.ActionButton>
        </S.TitleBox>
        {BriefReviewList.map(item => {
          return (
            <S.ReviewGaugeBox key={item.id}>
              <S.Gauge />
              <S.TextBox>
                <AppText>{item.description}</AppText>
                <AppText>30%</AppText>
              </S.TextBox>
            </S.ReviewGaugeBox>
          );
        })}
      </S.BriefReview>
      <S.DetailReview>
        <S.TitleBox>
          <AppText size="15px" weight="SemiBold">
            방문자 리뷰
          </AppText>
          <S.ActionButton onPress={() => handleWriteReview('DetailReiview')}>
            <S.IconBox>
              <CommentIcon />
            </S.IconBox>
            <AppText>리뷰 쓰기</AppText>
          </S.ActionButton>
        </S.TitleBox>
        <S.ReviewList>
          <S.defaultText>
            <AppText color="#5A6068">작성된 후기가 없습니다.</AppText>
            <AppText color="#5A6068">시술 후기를 작성 해보세요!</AppText>
          </S.defaultText>
        </S.ReviewList>
      </S.DetailReview>
      {showScreen && <BriefReviewScreen navigation={navigation} /> && (
        <ReviewScreen navigation={navigation} />
      )}
    </S.ReviewLayout>
  );
}

export default ShopReview;
