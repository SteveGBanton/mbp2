const styles = theme => ({
  root: {
    background: `linear-gradient(150deg,${theme.palette.colors.novaTeal},${theme.palette.colors.novaYellow})`,
    height: '100vh',
    width: '100%',
    paddingTop: '5vw',
  },
  input: {
    fontWeight: 300,
    borderBottom: '3px dotted rgba(0,0,0,0.05)',
    margin: 10,
    width: 250,
  },
  logo: {
    width: 90,
    marginBottom: 20,
  },
  signupBox: {
    borderRadius: 5,
    margin: 10,
    padding: 50,
    maxWidth: 600,
    width: '90%',
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
    width: 200,
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
    width: 200,
    backgroundColor: theme.palette.primary.google,
    margin: 3,
    borderRadius: 3,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.google,
      opacity: 0.9,
    },
  },
  signup: {
    width: 160,
    marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  headlineText: {
    fontSize: '2.5rem',
    fontWeight: 300,
    marginBottom: 30,
  },
});

export default styles;
