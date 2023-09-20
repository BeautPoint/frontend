import * as S from '@/styles/community/userinfo.style';
import {AppText} from '@/styles/global.style';

function CommunityUserInfo() {
  return (
    <S.UserInfoLayout>
      <S.ProfileImage />
      <S.InfoBox>
        <S.UserName>
          <AppText>닮은살걀</AppText>
        </S.UserName>
        <S.PostStats>
          <S.CreatedAt>
            <AppText size="12px">3분 전</AppText>
          </S.CreatedAt>
          <S.Views>
            <AppText size="12px">조회수 123</AppText>
          </S.Views>
        </S.PostStats>
      </S.InfoBox>
    </S.UserInfoLayout>
  );
}

export default CommunityUserInfo;
