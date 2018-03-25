const styles = theme => ({
  signupContainer: {
    
  },
  signupBox: {
    borderRadius: 9,
    padding: 40,
    marginTop: 100,
  },
  orText: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: theme.palette.primary.facebook,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.facebook,
      opacity: 0.9,
    },
  },
  google: {
    backgroundColor: theme.palette.primary.google,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.google,
      opacity: 0.9,
    },
  },
});

export default styles;
