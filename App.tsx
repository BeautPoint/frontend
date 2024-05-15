import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppText, Container} from '@/styles/global.style';
import StackNavigation from '@/navigation/stack.navigation';
import {RecoilRoot} from 'recoil';
import GlobalModals from '@/components/modals/globalmodal.component';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import ActionSheet from '@/components/common/actionSheet.component';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <Container>
            <StackNavigation />
          </Container>
          <GlobalModals />
          <ActionSheet />
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
