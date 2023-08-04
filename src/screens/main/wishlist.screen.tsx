import SlideApp from '@/components/test';
import * as S from '@/styles/screens/wishlist.screen';

function WishlistScreen() {
  return (
    <S.WishListLayOut>
      <S.TitleText>Wish List</S.TitleText>
      <SlideApp />
    </S.WishListLayOut>
  );
}

export default WishlistScreen;
