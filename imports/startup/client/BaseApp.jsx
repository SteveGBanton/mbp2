import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from '../../ui/router/Routes';
import theme from './theme';

const BaseApp = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

export default BaseApp;
