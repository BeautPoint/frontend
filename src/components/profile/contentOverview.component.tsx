import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/contentOverview.style';
import {useState} from 'react';
import UserContentList from './userContentList.component';

function ContentOverView() {
  const tabInfo = [
    {id: 0, text: '나의 글'},
    {id: 1, text: '나의 댓글'},
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <S.UserContentLayout>
      <S.TabBox>
        {tabInfo.map(item => (
          <S.Tabs
            key={item.id}
            isActive={activeTab == item.id}
            onPress={() => setActiveTab(item.id)}>
            <S.ItemCount>
              <AppText>0</AppText>
            </S.ItemCount>
            <AppText size="12px">{item.text}</AppText>
          </S.Tabs>
        ))}
      </S.TabBox>
      <S.Contents>
        <UserContentList />
      </S.Contents>
    </S.UserContentLayout>
  );
}

export default ContentOverView;
