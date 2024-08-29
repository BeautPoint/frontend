import {useSearchHook} from '@/hooks/search/useSearch.hook';
import navigationState from '@/recoil/navigation/navigation.recoil';
import * as S from '@/styles/common/searchResults.stlye';
import {NavigationProps} from '@/types/stackprops';
import {Platform} from 'react-native';
import {useRecoilValue} from 'recoil';
import BackIcon from '@/assets/icons/backIcon.svg';
import ServiceList from '@/components/shop/serviceList.component';
import {AppText} from '@/styles/global.style';
import {useState} from 'react';

function ServiceSearchResults({navigation}: NavigationProps['serviceList']) {
  const {searchKeyword} = useRecoilValue(navigationState);
  const {setShowResultsScreen} = useSearchHook();
  const [isPressed, setIsPressed] = useState(false);

  const handlebackbutton = () => {
    navigation.popToTop();
    setShowResultsScreen(false);
  };

  const handlePressed = () => {
    setShowResultsScreen(false);
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  return (
    <S.Layout>
      <S.MainSection marginTop={Platform.OS === 'android'}>
        <S.BackButton onPress={handlebackbutton}>
          <BackIcon />
        </S.BackButton>
        <S.SearchButton
          onPressIn={handlePressIn}
          onPress={handlePressed}
          opacity={isPressed}>
          <AppText>{searchKeyword}</AppText>
        </S.SearchButton>
      </S.MainSection>
      <ServiceList navigation={navigation} />
    </S.Layout>
  );
}

export default ServiceSearchResults;
