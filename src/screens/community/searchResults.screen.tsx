import CommunityHeader from '@/components/community/header.component';
import CommunityPost from '@/components/community/post.component';
import * as S from '@/styles/common/searchResults.stlye';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {ReportDropdownBackground} from '@/styles/screens/community.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {Platform, SafeAreaView} from 'react-native';
import {useSearchHook} from '@/hooks/search/useSearch.hook';
import {useState} from 'react';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {AppText} from '@/styles/global.style';

function SearchResultsScreen({navigation}: NavigationProps['community']) {
  const {showReportDropdown} = useRecoilValue(communityState);
  const {dropdownBackgroundHandle} = useCommunityPosts();
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
      <SafeAreaView />
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
      <CommunityHeader navigation={navigation} />
      <CommunityPost navigation={navigation} />
      {showReportDropdown ? (
        <ReportDropdownBackground onPress={() => dropdownBackgroundHandle()} />
      ) : null}
    </S.Layout>
  );
}

export default SearchResultsScreen;
