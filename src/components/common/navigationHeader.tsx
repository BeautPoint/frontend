import * as S from '@/styles/common/navigationHeader.style';
import {AppText} from '@/styles/global.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {NavigationProps} from '@/types/stackprops';

interface SType {
  navigation: any;
  navType: string;
  title: string;
}

function NavigationHeader({navigation, navType, title}: SType) {
  console.log(navigation, navType, title);
  const navigate = () => {
    navigation.navigation.goBack();
  };
  console.log(navigation);
  return (
    <S.HeaderLayout>
      <S.BackButton onPress={() => navigate()}>
        <BackIcon />
      </S.BackButton>
      <S.Title>
        <AppText>{title}</AppText>
      </S.Title>
      <S.SubmitButton>
        <AppText>완료</AppText>
      </S.SubmitButton>
    </S.HeaderLayout>
  );
}

export default NavigationHeader;
