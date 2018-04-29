const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeight,
      fontFamily: theme.typography.fontFamily,
    },
    html: {
      height: '100%',
      width: '100%',
    },
  },
});

export default styles;
