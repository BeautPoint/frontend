import shopState from '@/recoil/shop/shop.recoil';
import * as S from '@/styles/service/detailScreen.style';
import {NavigationProps} from '@/types/stackprops';
import {ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import NavHeader from '../common/navHeader.component';
import ShopInfoContent from './InfoContent.component';
import ShopOverview from './shopOverview.component';

function ServiceDetailScreen({navigation}: NavigationProps['serviceList']) {
  const {selectedService} = useRecoilValue(shopState);
  console.log(selectedService);

  return (
    <S.DetailsLayout>
      <S.Absolute>
        <NavHeader borderBottom={0} navigation={navigation} />
      </S.Absolute>
      <ScrollView>
        <ShopOverview navigation={navigation} />
        <ShopInfoContent navigation={navigation} />
      </ScrollView>
    </S.DetailsLayout>
  );
}

export default ServiceDetailScreen;
