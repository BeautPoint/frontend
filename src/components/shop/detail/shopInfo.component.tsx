import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/detail/shopInfo.style';

function DetailShopInfo() {
  return (
    <S.ShopInfoLayout>
      <S.IntroSection>
        <AppText>모발모발 병원에 대한 정보입니다.</AppText>
      </S.IntroSection>
      <S.Services>
        <S.TitleText>
          <AppText size="16px" weight="SemiBold">
            시술 항목
          </AppText>
        </S.TitleText>
      </S.Services>
    </S.ShopInfoLayout>
  );
}

export default DetailShopInfo;
