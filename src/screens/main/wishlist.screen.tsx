import ShopImage from '@/components/common/shopImage.component';
import {useHomeScreenHooks} from '@/hooks/home/home.hook';
import {useWishListHook} from '@/hooks/wishlist/wishlist.hook';
import HomeState from '@/recoil/home/home.recoil';
import WishListState from '@/recoil/wishlist/wishlist.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/screens/wishlist.screen';
import {useRecoilValue} from 'recoil';
import StartIcon from '@/assets/icons/starIcon.svg';

function WishlistScreen() {
  const {tabList, seletedTab} = useRecoilValue(WishListState);
  const {selectTabHandle} = useWishListHook();
  const {shopList, likeShops} = useRecoilValue(HomeState);
  const {shopLikeHandle} = useHomeScreenHooks();

  return (
    <S.WishListLayout>
      <S.ScreenTitle>
        <AppText size="15px" weight="SemiBold">
          찜
        </AppText>
      </S.ScreenTitle>
      <S.ScreenHeader>
        <S.HeaderTop>
          <S.TabBox>
            {tabList.map(li => (
              <S.Tab
                key={li.id}
                onPress={() => selectTabHandle(li.name)}
                background={seletedTab === li.name}>
                <AppText>{li.name}</AppText>
              </S.Tab>
            ))}
          </S.TabBox>
        </S.HeaderTop>
      </S.ScreenHeader>
      <S.ShopList
        data={shopList}
        renderItem={({item}) => (
          <S.ShopContainer>
            <S.ImageSection>
              <ShopImage shopData={item} />
            </S.ImageSection>
            <S.ShopInfoSection>
              <S.ShopInfoTop>
                <S.ShopName>
                  <AppText size="16px" weight="SemiBold" numberOfLines={1}>
                    {item.name}
                  </AppText>
                </S.ShopName>
                <S.ShopRating>
                  <StartIcon />
                  <AppText>0.0</AppText>
                </S.ShopRating>
              </S.ShopInfoTop>
              <S.OpeningHours>
                <S.OpenClosed>
                  <AppText weight="SemiBold">진료 종료</AppText>
                </S.OpenClosed>
                <S.Hours>
                  <AppText>09:30 - 18:30</AppText>
                </S.Hours>
              </S.OpeningHours>
              <S.ShopAdress>
                <AppText color="#717984">서울시 마포구 서교동</AppText>
              </S.ShopAdress>
            </S.ShopInfoSection>
          </S.ShopContainer>
        )}
      />
    </S.WishListLayout>
  );
}

export default WishlistScreen;
