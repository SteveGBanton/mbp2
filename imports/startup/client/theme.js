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
      light: '#ddc5fa',
      main: '#8e57cf',
      dark: '#3f255e',
      contrastText: '#fff',
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
