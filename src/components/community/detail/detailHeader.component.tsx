import * as S from '@/styles/community/detail/detailHeader.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {AppText} from '@/styles/global.style';
import {NavigationProps} from '@/types/stackprops';
import HeaderActionButtons from '@/components/community/actionButtons.component';

function DetailHeader({navigation}: NavigationProps['community']) {
  return (
    <S.DetailHeaderLayout>
      <S.LeftSection>
        <S.ActionButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </S.ActionButton>
      </S.LeftSection>
      <S.HeaderTitle>
        <AppText weight="Bold">게시물</AppText>
      </S.HeaderTitle>
      <HeaderActionButtons />
    </S.DetailHeaderLayout>
  );
}

export default DetailHeader;
