import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from '../../client/router/Routes';
import theme from './theme';

const BaseApp = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

export default BaseApp;
