import ShopDetailView from '@/components/shop/detail/detailview.component';
import ShopOverView from '@/components/shop/overview.component';
import * as S from '@/styles/screens/shopinfo.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {useBottomSheetHook} from '@/hooks/shop/bottomsheet.hook';
import {Dimensions} from 'react-native';

function ShopDetailScreen() {
  const {goBackButtonHandle} = useBottomSheetHook();
  const {height} = Dimensions.get('screen');

  return (
    <S.DetailLayOut>
      <S.DragDownBottomSheet height={height * 0.2} />
      <S.ScrollView>
        <S.BackButton onPress={() => goBackButtonHandle(true)}>
          <BackIcon />
        </S.BackButton>
        <ShopOverView />
        <ShopDetailView />
      </S.ScrollView>
    </S.DetailLayOut>
  );
}

export default ShopDetailScreen;
