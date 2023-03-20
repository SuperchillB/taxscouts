import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../store';
import theme from '../styles/theme';

/*
Comments:
  - this component is where we can wrap all our context providers used in our app
  - For now we only use Redux's <Provider> and styled-components'
    <ThemeProvider>, but other providers such as internationalisation or auth
    providers would go in here
*/

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ReduxProvider>
);

export default AppProviders;
