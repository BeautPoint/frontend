import {useKakaoOauth} from '@/hooks/auth/oauth.hooks';
import {View, Text, Pressable} from 'react-native';

function KakaoOauthButton() {
  const {onPressKakaoBtn} = useKakaoOauth();
  return (
    <View>
      <Pressable onPress={() => onPressKakaoBtn()}>
        <Text>Kakao Login</Text>
      </Pressable>
    </View>
  );
}

export default KakaoOauthButton;
