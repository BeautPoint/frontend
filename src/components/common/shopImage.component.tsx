import * as S from '@/styles/common/shopImage.style';
import HeartIcon from '@/assets/icons/heartIcon.svg';
import {useRecoilValue} from 'recoil';
import HomeState from '@/recoil/home/home.recoil';
import {useHomeScreenHooks} from '@/hooks/home/home.hook';


function ShopImage({shopData}) {
  const {shopList, likeShops} = useRecoilValue(HomeState);
  const {shopLikeHandle} = useHomeScreenHooks();

  return (
    <S.ShopImageLayout>
      <S.GradientImage
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.1)',
        ]}
      />
      <S.Image source={{uri: shopData.uri}} />
    </S.ShopImageLayout>
  );
}

export default ShopImage;
