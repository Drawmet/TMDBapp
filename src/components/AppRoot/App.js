import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';

import store from '../../store';
import theme from '../../themes/defaultTheme';
import Router from '../../routers';

import './App.css';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
