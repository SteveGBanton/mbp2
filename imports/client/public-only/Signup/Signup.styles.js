const styles = theme => ({
  root: {
    background: `linear-gradient(150deg,${theme.palette.colors.novaTeal},${theme.palette.colors.novaYellow})`,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  signupBox: {
    borderRadius: 5,
    height: 500,
    width: 700,
    margin: 10,
    padding: '30px 50px 30px 50px',
    boxSizing: 'border-box',
  },
  orText: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    borderRadius: 3,
    margin: 3,
    backgroundColor: theme.palette.primary.facebook,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.facebook,
      opacity: 0.9,
    },
  },
  google: {
    backgroundColor: theme.palette.primary.google,
    margin: 3,
    borderRadius: 3,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.google,
      opacity: 0.9,
    },
  },
  marginTop: {
    marginTop: 15,
  },
});

export default styles;
