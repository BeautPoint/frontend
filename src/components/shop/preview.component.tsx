import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/preview.style';
import StartIcon from '@/assets/icons/starIcon.svg';
import {Dimensions, Platform} from 'react-native';

function ShopPreview() {
  const {width} = Dimensions.get('window');
  console.log(width);
  return (
    <S.PreviewLayOut>
      <S.ShopName>
        <S.RatingStars>
          <StartIcon />
          <AppText>4.5</AppText>
        </S.RatingStars>
        <AppText size="22px" weight="Bold">
          모발모발 병원
        </AppText>
      </S.ShopName>
      <S.ShopHours>
        <S.Status>
          <AppText>진료중</AppText>
        </S.Status>
        <S.Hours>
          <AppText>09:30 - 18 : 00</AppText>
        </S.Hours>
      </S.ShopHours>
      <S.ShopAddress>
        <AppText color="#717984">서울시 마포구 서교동</AppText>
      </S.ShopAddress>
      <S.BadgeBox>
        <S.HighlightBadge>
          <AppText color="#337EFF" weight="Bold">
            후기많은
          </AppText>
        </S.HighlightBadge>
        <S.HighlightBadge>
          <AppText color="#337EFF" weight="Bold">
            야간진료
          </AppText>
        </S.HighlightBadge>
      </S.BadgeBox>
    </S.PreviewLayOut>
  );
}

export default ShopPreview;
