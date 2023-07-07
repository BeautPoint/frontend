import {Platform, Text, View} from 'react-native';
import GoogleOauthButton from './googleOauth.component';
import KakaoOauthButton from './kakaoOauth.component';

function SingIn() {
  return (
    <View>
      <Text>hi</Text>
      {Platform.OS === 'android' ? <GoogleOauthButton /> : ''}
      <KakaoOauthButton />
    </View>
  );
}

export default SingIn;
