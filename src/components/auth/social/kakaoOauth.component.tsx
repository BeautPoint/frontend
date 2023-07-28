import {useKakaoOauth} from '@/hooks/auth/oauth.hooks';
import KakaoIcon from '@/assets/icons/kakaoIcon.svg';
import * as S from '@/styles/auth/oauthButton.style';

function KakaoOauthButton() {
  const {onPressKakaoBtn} = useKakaoOauth();
  return (
    <S.AouthButtonLayOut background="#fee500" onPress={() => onPressKakaoBtn()}>
      <S.ButtonIcon>
        <KakaoIcon />
      </S.ButtonIcon>
      <S.ButtonText color="black">카카오로 로그인</S.ButtonText>
    </S.AouthButtonLayOut>
  );
}

export default KakaoOauthButton;
