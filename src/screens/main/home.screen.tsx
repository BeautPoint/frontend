import * as S from '@/styles/screens/home.style';
import HomeHeader from '@/components/home/homeHeader.component';
import HomeBanner from '@/components/home/bannner.component';
import HomeCategories from '@/components/home/categories.component';
import RecommendedShop from '@/components/home/recommendedShop.component';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilState} from 'recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {useHomeScreenHooks} from '@/hooks/home/home.hook';

function HomeScreen({navigation}: NavigationProps['home']) {
  const [state, setState] = useRecoilState(navigationState);
  const {handleHomeScreenNavReset} = useHomeScreenHooks();
  handleHomeScreenNavReset(false);
  return (
    <S.HomeLayOut>
      <HomeHeader navigation={navigation} />
      <HomeBanner />
      <HomeCategories />
      <RecommendedShop navigation={navigation} />
    </S.HomeLayOut>
  );
}

export default HomeScreen;
