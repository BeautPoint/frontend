import {useSearchHook} from '@/hooks/search/useSearch.hook';
import navigationState from '@/recoil/navigation/navigation.recoil';
import * as S from '@/styles/common/searchResults.stlye';
import {NavigationProps} from '@/types/stackprops';
import {Platform, SafeAreaView, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import BackIcon from '@/assets/icons/backIcon.svg';
import ServiceList from '@/components/shop/serviceList.component';
import {AppText} from '@/styles/global.style';

function CategorySearchResults({navigation}: NavigationProps['serviceList']) {
  const {searchKeyword} = useRecoilValue(navigationState);
  const {setShowResultsScreen} = useSearchHook();

  const handlebackbutton = () => {
    navigation.popToTop();
    setShowResultsScreen(false);
  };

  return (
    <S.Layout>
      <SafeAreaView>
        <S.Header>
          <View style={{position: 'absolute', left: 20}}>
            <S.BackButton onPress={handlebackbutton}>
              <BackIcon />
            </S.BackButton>
          </View>
          <AppText>{searchKeyword}</AppText>
        </S.Header>
      </SafeAreaView>
      <ServiceList navigation={navigation} />
    </S.Layout>
  );
}

export default CategorySearchResults;
