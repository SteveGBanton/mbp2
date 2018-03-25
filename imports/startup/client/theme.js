import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  custom: 'yag',
  typography: {
    fontSize: 14,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    medium: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '0.5rem',
    },
  },
  palette: {
    primary: {
      light: '#5C6BC0',
      main: '#3949AB',
      dark: '#1A237E',
      contrastText: '#fff',
      facebook: '#3b5998',
      google: '#ea4335',
    },
    secondary: {
      light: '#bdbdbd',
      main: '#616161',
      dark: '#212121',
      contrastText: '#444444',
    },
  },
});

export default theme;
