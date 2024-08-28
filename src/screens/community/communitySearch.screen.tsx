import * as S from '@/styles/community/searchScreen.style';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import SearchResultsScreen from './searchResults.screen';
import SearchScreen from '../search/search.screen';
import navigationState from '@/recoil/navigation/navigation.recoil';

function CommunitySearchScreen({navigation}: NavigationProps['community']) {
  const {showResultsScreen} = useRecoilValue(navigationState);
  return (
    <S.Layout>
      {showResultsScreen ? (
        <SearchResultsScreen navigation={navigation} />
      ) : (
        <SearchScreen navigation={navigation} />
      )}
    </S.Layout>
  );
}

export default CommunitySearchScreen;
