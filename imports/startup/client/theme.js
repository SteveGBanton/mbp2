import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  custom: 'yag',
  typography: {
    fontSize: 14,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    frontPageHeader: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.5rem',
    },
    preHeaderText: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      color: '#EEE',
      fontSize: '1rem',
      textTransform: 'uppercase',
      margin: '5px 0 5px 0',
    },
    display1: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '1.6rem',
      color: '#fff',
    },
    display2: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      color: '#E0E0E0',
      fontSize: '1rem',
      textTransform: 'uppercase',
      margin: 5,
    },
    display3: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      color: '#757575',
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      margin: 5,
    },
    display4: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '1.8rem',
      color: '#000',
    },
    headline: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '2.5rem',
      color: '#000',
    },
    body1: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
      color: '#000',
    },
    body2: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '0.8rem',
      color: '#757575',
    },
    subheading: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      color: '#000',
    },
  },
  palette: {
    background: {
      default: '#F5F5F5',
    },
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
    colors: {
      novaTeal: '#0bebce',
      novaTealDark: '#0cd2b9',
      novaYellow: '#e4ff04',
      novaYellowDark: '#e0f816',
      grey: '#9E9E9E',
      darkGrey: '#424242',
      lightGrey: '#EEEEEE',
      lighterGrey: '#f9f9f9',
    },
  },
});

export default theme;
