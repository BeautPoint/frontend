import SignupInfoForm from '@/components/auth/signupinfo.component';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/screens/signup.style';

function SignupScreen() {
  return (
    <S.SignupLayOut>
      <SignupInfoForm />
      <S.NextButton>
        <AppText color="#ffffff">다음</AppText>
      </S.NextButton>
    </S.SignupLayOut>
  );
}

export default SignupScreen;
