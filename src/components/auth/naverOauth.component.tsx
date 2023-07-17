import {useNaverOauth} from '@/hooks/auth/oauth.hooks';
import * as S from '@/styles/auth/oauthButton.style';
import NaverIcon from '@/assets/icons/naverIcon.svg';

function NaverOauthButton() {
  const {onPressNaverBtn} = useNaverOauth();
  return (
    <S.AouthButtonLayOut background="#03C75A" onPress={onPressNaverBtn}>
      <S.ButtonIcon>
        <NaverIcon />
      </S.ButtonIcon>
      <S.ButtonText color="">네이버로 로그인</S.ButtonText>
    </S.AouthButtonLayOut>
  );
}

export default NaverOauthButton;
