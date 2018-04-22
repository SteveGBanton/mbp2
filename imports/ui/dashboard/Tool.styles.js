export default theme => ({
  root: {
    width: '100%',
    marginTop: '-10',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 40,
    margin: '0 10px 0 0',
  },
  yellow: {
    backgroundColor: theme.palette.colors.novaYellow,
  },
  teal: {
    backgroundColor: theme.palette.colors.novaTeal,
  },
  grey: {
    backgroundColor: theme.palette.colors.grey,
  },
  toolHeader: {
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  toolHeaderInner: {
    padding: '3vw 5vw 3vw 5vw',
    maxWidth: 1100,
    backgroundColor: '#F5F5F5',
  },
  toolHeaderLeft: {
    padding: '1.5vw',
    width: '65%',
    backgroundColor: '#F5F5F5',
    minWidth: 300,
  },
  toolHeaderRight: {
    padding: '2vw 2vw 2vw 4vw',
    width: '30%',
    backgroundColor: '#F5F5F5',
    minWidth: 300,
  },
  toolBody: {
    padding: '30px 5vw 3vw 5vw',
    maxWidth: 900,
  },
  stepCard: {
    boxShadow: '0 6px 22px rgba(0,0,0,0.12), 0 6px 10px rgba(0,0,0,0.08)',
    padding: 0,
    borderRadius: 6,
    marginTop: 30,
  },
  stepCardLeft: {
    position: 'relative',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 90,
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  stepCardRight: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    height: '100%',
    width: 'calc(100% - 90px)',
    padding: 20,
  },
  image: {
    maxHeight: 300,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      maxHeight: '300px',
      maxWidth: '100%',
    },
  },
});
