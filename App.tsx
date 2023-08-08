import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppText, Container} from '@/styles/global.style';
import StackNavigation from '@/navigation/stack.navigation';
import {RecoilRoot} from 'recoil';
import GlobalModals from '@/components/modals/globalmodal.component';

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Container>
          <StackNavigation />
        </Container>
        <GlobalModals />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
