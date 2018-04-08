const styles = theme => ({
  signupBox: {
    borderRadius: 9,
    padding: '30px 50px 30px 50px',
    marginTop: 100,
    width: 320,
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
    borderRadius: 0,
    backgroundColor: theme.palette.primary.facebook,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.facebook,
      opacity: 0.9,
    },
  },
  google: {
    backgroundColor: theme.palette.primary.google,
    borderRadius: 0,
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
