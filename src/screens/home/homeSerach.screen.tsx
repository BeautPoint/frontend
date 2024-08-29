import navigationState from '@/recoil/navigation/navigation.recoil';
import {NavigationProps} from '@/types/stackprops';
import {SafeAreaView, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import SearchScreen from '../search/search.screen';
import ServiceSearchResults from './serviceSearchResults.screen';

function HomeSearchScreen({navigation}: NavigationProps['serviceList']) {
  const {showResultsScreen} = useRecoilValue(navigationState);

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: '100%'}}>
      {showResultsScreen ? (
        <ServiceSearchResults navigation={navigation} />
      ) : (
        <SearchScreen navigation={navigation} />
      )}
    </SafeAreaView>
  );
}

export default HomeSearchScreen;
