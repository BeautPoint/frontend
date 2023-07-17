import {useGoogleOauth} from '@/hooks/auth/oauth.hooks';
import GoogleIcon from '@/assets/icons/googleIcon.svg';
import * as S from '@/styles/auth/oauthButton.style';

function GoogleOauthButton() {
  const {onPressGoogleBtn} = useGoogleOauth();
  return (
    <S.AouthButtonLayOut background="" onPress={() => onPressGoogleBtn()}>
      <S.ButtonIcon>
        <GoogleIcon />
      </S.ButtonIcon>
      <S.ButtonText color="black"> Google로 로그인</S.ButtonText>
    </S.AouthButtonLayOut>
  );
}

export default GoogleOauthButton;
