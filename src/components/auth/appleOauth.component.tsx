import * as S from '@/styles/auth/oauthButton.style';
import AppleIcon from '@/assets/icons/appleIcon.svg';

function AppleOauthButton() {
  return (
    <S.AouthButtonLayOut background="black">
      <S.ButtonIcon>
        <AppleIcon />
      </S.ButtonIcon>
      <S.ButtonText color="">Apple로 로그인</S.ButtonText>
    </S.AouthButtonLayOut>
  );
}

export default AppleOauthButton;
