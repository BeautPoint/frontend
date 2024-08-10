import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/recommendedShop.style';
import {useRecoilValue} from 'recoil';
import HomeState from '@/recoil/home/home.recoil';
import {NavigationProps} from '@/types/stackprops';
import ShopDetailScreen from '@/screens/shop/detail.screen';
import {useAuthHook} from '@/hooks/auth/auth.hook';
import {useServiceHook} from '@/hooks/service/service.hook';
import {extractAddress} from '@/utils/validateShop.util';

interface RecommendedShopProps {
  navigation: NavigationProps['home']['navigation'];
  serviceShopData: any;
}

function RecommendedShop({navigation, serviceShopData}: RecommendedShopProps) {
  const imgurl = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuKygLj7YGOeEyeVNQyOrykZEvmngRwxbBQ&usqp=CAU',
  };

  const {shopList, likeShops} = useRecoilValue(HomeState);
  const {handleShopDetails} = useServiceHook();
  const showShopDetail = false;

  const handlePressedContent = (data: any) => {
    navigation.navigate('ServiceDetails');
    handleShopDetails(data);
  };

  return (
    <S.RecommendedShopLayout>
      <S.SectionTitle>
        <AppText size="16px" weight="SemiBold">
          내 위치 근처에서 사람들이 많이 찾는
        </AppText>
      </S.SectionTitle>
      <S.SlideList
        horizontal
        data={serviceShopData}
        renderItem={({item}) => (
          <>
            {showShopDetail && <ShopDetailScreen navigation={navigation} />}
            <S.ShopContainer onPress={() => handlePressedContent(item)}>
              <S.ImageBox>
                <S.GradientImage
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={[
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)',
                  ]}
                />
                <S.Image source={{uri: imgurl.uri}} />
              </S.ImageBox>
              <S.InfoSection>
                <S.ServiceInfo>
                  <AppText weight="SemiBold" numberOfLines={1}>
                    {item.name}
                  </AppText>
                </S.ServiceInfo>
                <S.ServiceInfo>
                  <AppText size="11px" color="#8d8d8d" numberOfLines={1}>
                    {extractAddress(item.address)}
                  </AppText>
                </S.ServiceInfo>
              </S.InfoSection>
            </S.ShopContainer>
          </>
        )}
      />
    </S.RecommendedShopLayout>
  );
}

export default RecommendedShop;
