import ShopDetailView from '@/components/shop/detailview.component';
import ShopOverView from '@/components/shop/overview.component';
import * as S from '@/styles/screens/shopinfo.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {NavigationProps} from '@/types/stackprops';

function ShopDetailScreen({navigation}: NavigationProps['search']) {
  return (
    <S.DetailLayOut>
      <S.ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <S.BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </S.BackButton>
        <ShopOverView />
        <ShopDetailView />
      </S.ScrollView>
    </S.DetailLayOut>
  );
}

export default ShopDetailScreen;
