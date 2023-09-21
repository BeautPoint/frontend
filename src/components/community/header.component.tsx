import * as S from '@/styles/community/header.style';
import {AppText} from '@/styles/global.style';
import DownIcon from '@/assets/icons/downIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import BellIcon from '@/assets/icons/bellIcon.svg';
import HeaderActionButtons from './actionButtons.component';

function CommunityHeader() {
  const communityInfo = useRecoilValue(communityState);
  const setCommunity = useSetRecoilState(communityState);

  const tabHandle = (tabName: string) => {
    setCommunity(prevState => ({
      ...prevState,
      selectedTab: tabName,
    }));
  };
  return (
    <S.HeaderLayout>
      <S.TabBox>
        {communityInfo.tabSelector.map(item => {
          const isTabSelected = communityInfo.selectedTab === item.name;
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
        <HeaderActionButtons />
      </S.TabBox>
      <S.DropdownBox>
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
      </S.DropdownBox>
    </S.HeaderLayout>
  );
}

export default CommunityHeader;
