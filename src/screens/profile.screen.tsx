import SingIn from '@/components/auth/signin.component';
import * as S from '@/styles/screens/profile.style';

function ProfileScreen() {
  return (
    <S.ProfileLayOut>
      <S.TitleText>My Page</S.TitleText>
      <SingIn />
    </S.ProfileLayOut>
  );
}

export default ProfileScreen;
