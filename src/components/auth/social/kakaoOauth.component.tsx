import {useKakaoOauth, useOauthHook} from '@/hooks/auth/oauth.hooks';
import KakaoIcon from '@/assets/icons/kakaoIcon.svg';
import * as S from '@/styles/auth/oauthButton.style';
import {NavigationProps} from '@/types/stackprops';

function KakaoOauthButton({navigation}: NavigationProps['signup']) {
  const {onPressKakaoBtn} = useKakaoOauth();
  const {kakaoOauth} = useOauthHook();
  return (
    <S.AouthButtonLayOut background="#fee500" onPress={() => kakaoOauth()}>
      <S.ButtonIcon>
        <KakaoIcon />
      </S.ButtonIcon>
      <S.ButtonText color="black">카카오로 로그인</S.ButtonText>
    </S.AouthButtonLayOut>
  );
}

export default KakaoOauthButton;
