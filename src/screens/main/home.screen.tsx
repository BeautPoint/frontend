import * as S from '@/styles/screens/home.style';
import HomeHeader from '@/components/home/homeHeader.component';
import HomeBanner from '@/components/home/bannner.component';
import HomeCategories from '@/components/home/categories.component';
import RecommendedShop from '@/components/home/recommendedShop.component';
import {NavigationProps} from '@/types/stackprops';

function HomeScreen({navigation}: NavigationProps['home']) {
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
