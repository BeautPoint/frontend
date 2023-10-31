import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useCallback, useEffect, useState} from 'react';

export const useOAuth = (type: string) => {
  const [userData, setData] = useState<any>();
  const google = process.env.GOOGLE_CLIENT;

  useEffect(() => {}, []);
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId: google,
    });
  };

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const googleLogin = () => {
    try {
      onGoogleButtonPress();
    } catch (err) {
      console.log(err);
    }
  };

  const click = (ss: undefined | string) => {
    console.log('hello!!!');
  };

  return {googleLogin, click};
};
