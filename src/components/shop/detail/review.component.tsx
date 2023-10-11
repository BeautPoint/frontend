import shopState from '@/recoil/shop/shop.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detail/review.style';
import {useRecoilValue} from 'recoil';

function ShopReview() {
  const {BriefReviewList} = useRecoilValue(shopState);
  return (
    <S.ReviewLayout>
      <S.BriefReview>
        <S.TitleBox>
          <AppText size="15px" weight="SemiBold">
            이런 점이 좋았어요
          </AppText>
          <S.ActionButton>
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
          <S.WriteButton>
            <AppText>리뷰 쓰기</AppText>
          </S.WriteButton>
        </S.TitleBox>
      </S.DetailReview>
    </S.ReviewLayout>
  );
}

export default ShopReview;
