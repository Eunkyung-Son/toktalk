import React from 'react';
import { Provider as RTKProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from 'native-base';

import store from '@features/store';
import theme from '@styles/theme';

const queryClient = new QueryClient();

function withAppProvider<
  T extends (props: any) => JSX.Element,
  P extends Parameters<T>[0],
>(AppComponent: T) {
  return function WrappedAppComponent(props: P) {
    return (
      <RTKProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider theme={theme}>
            <AppComponent {...props} />
          </NativeBaseProvider>
        </QueryClientProvider>
      </RTKProvider>
    );
  };
}
export default withAppProvider;
