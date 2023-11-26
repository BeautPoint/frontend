import ShopDetailView from '@/components/shop/detail/detailview.component';
import ShopOverView from '@/components/shop/overview.component';
import * as S from '@/styles/screens/shopinfo.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {useBottomSheetHook} from '@/hooks/shop/bottomsheet.hook';
import {Dimensions} from 'react-native';
import {NavigationProps} from '@/types/stackprops';

function ShopDetailScreen({navigation}: NavigationProps['home' | 'location']) {
  const {goBackButtonHandle} = useBottomSheetHook();
  const {height} = Dimensions.get('screen');
  const navigationHandle = () => {
    navigation ? navigation.goBack() : goBackButtonHandle(true);
  };

  console.log(navigation);

  return (
    <S.DetailLayOut>
      <S.DragDownBottomSheet height={height * 0.2} />
      <S.BackButton onPress={() => navigationHandle()}>
        <BackIcon />
      </S.BackButton>
      <S.ScrollView>
        <ShopOverView />
        <ShopDetailView navigation={navigation} />
      </S.ScrollView>
    </S.DetailLayOut>
  );
}

export default ShopDetailScreen;
