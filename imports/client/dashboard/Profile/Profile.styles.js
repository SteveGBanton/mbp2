const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    marginTop: 60,
    maxWidth: 800,
    width: '95%',
    marginBottom: 150,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: 60,
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  pageTitleText: {
    margin: '0 0 40px 0',
    ...theme.typography.pageTitleText,
  },
  cardTitleText: {
    ...theme.typography.cardTitleText,
  },
  fb: {
    color: theme.palette.primary.facebook,
  },
  bold: {
    fontWeight: 700,
  },
  headerColorFb: {
    backgroundColor: theme.palette.primary.facebook,
  },
  headerColorGoogle: {
    backgroundColor: theme.palette.primary.google,
  },
  headerColor: {
    paddingLeft: 70,
    position: 'relative',
    backgroundColor: theme.palette.colors.lightGrey,
  },
  headerColorYellow: {
    backgroundColor: theme.palette.colors.novaYellowDark,
  },
  bkImage: {
    zIndex: 100,
    position: 'absolute',
    top: -10,
    left: 10,
    height: '100%',
    '& img': {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
});

export default styles;
