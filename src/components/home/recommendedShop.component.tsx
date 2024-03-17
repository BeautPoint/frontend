import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/recommendedShop.style';
import StartIcon from '@/assets/icons/starIcon.svg';
import DisTanceIcon from '@/assets/icons/locationIcon.svg';
import HeartIcon from '@/assets/icons/heartIcon.svg';
import {useRecoilValue} from 'recoil';
import HomeState from '@/recoil/home/home.recoil';
import {useHomeScreenHooks} from '@/hooks/home/home.hook';
import {NavigationProps} from '@/types/stackprops';
import ShopDetailScreen from '@/screens/shop/detail.screen';
import {useAuthHook} from '@/hooks/auth/auth.hook';

function RecommendedShop({navigation}: NavigationProps['home']) {
  const imgurl = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuKygLj7YGOeEyeVNQyOrykZEvmngRwxbBQ&usqp=CAU',
  };

  const {shopLikeHandle} = useHomeScreenHooks();
  const {shopList, likeShops} = useRecoilValue(HomeState);
  const {accessToken} = useAuthHook();
  const showShopDetail = false;

  const handleLikeButton = (likeShop: any) => {
    !accessToken ? navigation.navigate('Login') : shopLikeHandle(likeShop);
  };

  console.log(likeShops);
  return (
    <S.RecommendedShopLayout>
      <S.SectionTitle>
        <AppText size="16px" weight="SemiBold">
          내 위치 근처에서 사람들이 많이 찾는
        </AppText>
      </S.SectionTitle>
      <S.SlideList
        horizontal
        data={shopList}
        renderItem={({item}) => (
          <>
            {showShopDetail && <ShopDetailScreen navigation={navigation} />}
            <S.ShopContainer onPress={() => navigation.navigate('ShopDetails')}>
              <S.ImageBox>
                <S.LikeButton onPress={() => handleLikeButton(item)}>
                  <HeartIcon
                    color="#ffffff"
                    fill={
                      likeShops.some(list => list.id === item.id)
                        ? '#ffffff'
                        : 'none'
                    }
                    strokeWidth="2"
                  />
                </S.LikeButton>
                <S.GradientImage
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={[
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)',
                  ]}
                />
                <S.Image source={{uri: item.uri}} />
              </S.ImageBox>
              <S.InfoSection>
                <S.InfoTop>
                  <S.ShopName>
                    <AppText numberOfLines={1}>{item.name}</AppText>
                  </S.ShopName>
                </S.InfoTop>
                <S.InfoBottom>
                  <S.ShopDistance>
                    <DisTanceIcon width="10px" color="#4D84E3" />
                    <AppText size="13px" color="#8d8d8d">
                      5km
                    </AppText>
                  </S.ShopDistance>
                  <S.ShopRating>
                    <StartIcon width="10px" />
                    <AppText>3.3</AppText>
                    <AppText size="12px" color="#8d8d8d">
                      (0)
                    </AppText>
                  </S.ShopRating>
                </S.InfoBottom>
              </S.InfoSection>
            </S.ShopContainer>
          </>
        )}
      />
    </S.RecommendedShopLayout>
  );
}

export default RecommendedShop;
