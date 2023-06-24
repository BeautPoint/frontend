import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, SafeAreaView} from 'react-native';
export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>hello world!</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
