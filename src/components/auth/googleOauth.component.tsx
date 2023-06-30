import {View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {useGoogleOauth} from '@/hooks/auth/oauth.hooks';

function GoogleOauthButton() {
  const {onPressGoogleBtn} = useGoogleOauth();
  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onPressGoogleBtn()}
      />
    </View>
  );
}

export default GoogleOauthButton;
