export default theme => ({
  topcard: {
    position: 'relative',
    padding: 20,
    margin: '15px 15px 65px 15px',
    width: '84vw',
    maxWidth: 1000,
    height: 340,
    // backgroundColor: '#f9f9f9',
    boxSizing: 'border-box',
  },
  preHeaderText: {
    ...theme.typography.preHeaderText,
    color: '#999',
  },
  titleText: {
    color: '#545454',
    maxWidth: 300,
    fontSize: 35,
    fontWeight: 500,
    marginBottom: 15,
  },
  bodyText: {
    marginTop: 50,
    color: '#545454',
    fontSize: 20,
    maxWidth: 350,
    fontWeight: 300,
  },
  textContainer: {
    padding: 35,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
});
