import {useUserInfoHook} from '@/hooks/user/userinfo.hook';
import userInfoState from '@/recoil/user/user.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/contentOverview.style';
import {NavigationProps} from '@/types/stackprops';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import UserContentList from './userContentList.component';

function ContentOverView({navigation}: NavigationProps['profile']) {
  const {profiletabInfo, activeTab} = useRecoilValue(userInfoState);
  const {handleActiveTab} = useUserInfoHook();

  return (
    <S.UserContentLayout>
      <S.TabBox>
        {profiletabInfo.map(item => (
          <S.Tabs
            key={item.id}
            isActive={activeTab == item.id}
            onPress={() => handleActiveTab(item.id)}>
            <S.ItemCount>
              <AppText>0</AppText>
            </S.ItemCount>
            <AppText size="12px">{item.text}</AppText>
          </S.Tabs>
        ))}
      </S.TabBox>
      <S.Contents>
        <UserContentList navigation={navigation} />
      </S.Contents>
    </S.UserContentLayout>
  );
}

export default ContentOverView;
