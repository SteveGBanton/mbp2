import { drawerHeight } from '../../shared/DrawerNavigation';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  splash: {
    width: '100%',
    height: `calc(100vh - ${drawerHeight}px)`,
    padding: 0,
    margin: 0,
    background: `linear-gradient(150deg,${theme.palette.colors.novaTealDark},${theme.palette.colors.novaTeal})`,
    // backgroundColor: theme.palette.colors.novaTealDark,
    position: 'relative',
  },
  '@keyframes my-animation': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-15px)' },
    '100%': { transform: 'translateY(0px)' },
  },
  splashImage: {
    animation: 'my-animation 5s linear infinite',
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '80%',
    marginTop: 100,
    '& img': {
      height: '80vh',
      maxWidth: '80%',
      minWidth: 1000,
      opacity: 0.5,
    },
  },
  intro: {
    zIndex: 200,
    padding: '3vw 5vw 3vw 5vw',
    width: '95%',
    maxWidth: 1000,
    height: 300,
  },
  start: {
    backgroundColor: '#fff',
  },
  startMenu: {
    padding: '3vw 5vw 3vw 5vw',
    width: '95%',
    maxWidth: 1000,
  },
  about: {
    backgroundColor: theme.palette.colors.lighterGrey,
    minHeight: 20,
  },
  textHeaderDescription: {
    ...theme.typography.display1,
    color: theme.palette.primary.contrastText,
    textShadow: '1px 1px rgba(0, 0, 0, 0.3)',
  },
  textHeader: {
    ...theme.typography.headline,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: '3rem',
    textShadow: '1px 1px rgba(0, 0, 0, 0.3)',
  },
  buttonLogin: {
    margin: '40px 15px 0 0',
    padding: '12px 20px 12px 20px',
    // color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.colors.novaYellow,
    '&:hover': {
      boxShadow: '0px 0px 0px 3px rgba(255, 255, 255, 0.3), 0px 0px 0px 4px rgba(255,255, 255, 0.14), 0px 3px 1px -2px rgba(255, 255, 255, 0.12)',
      backgroundColor: theme.palette.colors.novaYellow,
    },
  },
});

export default styles;
