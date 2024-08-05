import * as S from '@/styles/community/header.style';
import {AppText} from '@/styles/global.style';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import HeaderActionButtons from './actionButtons.component';
import {NavigationProps} from '@/types/stackprops';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import {useSearchHook} from '@/hooks/search/useSearch.hook';
import {SafeAreaView} from 'react-native';

function CommunityHeader({navigation}: NavigationProps['community']) {
  const {tabSelector, selectedTab, showResultsScreen} =
    useRecoilValue(communityState);
  const setCommunity = useSetRecoilState(communityState);
  const {setNavLocation} = useSearchHook();

  const tabHandle = (tabName: string) => {
    setCommunity(prevState => ({
      ...prevState,
      selectedTab: tabName,
    }));
  };

  const handleSearchButton = () => {
    navigation.navigate('CommunitySearch');
    setNavLocation('community');
  };

  return (
    <S.HeaderLayout>
      <S.TabBox>
        {tabSelector.map(item => {
          const isTabSelected = selectedTab === item.name;
          return (
            <S.TabMenu
              border={isTabSelected}
              key={item.id}
              onPress={() => tabHandle(item.name)}>
              <AppText
                color={isTabSelected ? '#619bff' : ''}
                weight={isTabSelected ? 'SemiBold' : ''}>
                {item.name}
              </AppText>
            </S.TabMenu>
          );
        })}
        {/* <HeaderActionButtons /> */}
        {!showResultsScreen && (
          <S.ButtonBox>
            <S.SearchButton onPress={handleSearchButton}>
              <SearchIcon color="#4d4d4d" />
            </S.SearchButton>
          </S.ButtonBox>
        )}
      </S.TabBox>
      {/* <S.DropdownBox>
        <S.CategoryDrobdown>
          <S.DrobdownLabel>
            <AppText size="13px" weight="Bold">
              카테고리
            </AppText>
          </S.DrobdownLabel>
          <S.CategoryTitle>
            <AppText size="13px">눈썹</AppText>
          </S.CategoryTitle>
          <S.DownIconBox>
            <DownIcon />
          </S.DownIconBox>
        </S.CategoryDrobdown>
        <S.SortDrobdown>
          <AppText size="13px">최신순</AppText>
          <S.DownIconBox>
            <DownIcon />
          </S.DownIconBox>
        </S.SortDrobdown>
      </S.DropdownBox> */}
    </S.HeaderLayout>
  );
}

export default CommunityHeader;
