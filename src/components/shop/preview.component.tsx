import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/preview.style';
import StartIcon from '@/assets/icons/starIcon.svg';
import {Dimensions, Platform} from 'react-native';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';

function ShopPreview() {
  const {previewFullScreen, selectedShop} = useRecoilValue(shopState);
  return (
    <S.PreviewLayOut paddingHorizontal={!previewFullScreen ? 20 : 0}>
      <S.ShopName>
        <S.RatingStars>
          <StartIcon />
          <AppText>4.5</AppText>
        </S.RatingStars>
        <AppText numberOfLines={1} size="22px" weight="Bold">
          {selectedShop.name}
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
        <AppText color="#717984">{selectedShop.address}</AppText>
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
