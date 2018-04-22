import React from 'react';
import { shape, string } from 'prop-types';
import { compose } from 'recompose';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';

const styles = () => ({
  topcard: {
    borderRadius: 5,
    boxShadow: '0 5px 22px rgba(0,0,0,0.10)',
    padding: 20,
    margin: 15,
    width: 300,
    height: 250,
    backgroundColor: 'rgb(30, 222, 184)',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'absolute',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 7px 25px rgba(0,0,0,0.17)',
      cursor: 'pointer',
    },
  },
  img1: {
    width: 80,
    padding: 2,
    margin: 'auto',
    display: 'block',
  },
});

const MenuCard = ({
  classes,
  history,
  cardData: {
    color,
    title,
    image,
    backgroundSize,
    backgroundPosition,
    preHeader,
    link,
  },
}) => (
  <div>
    <Grid
      className={classes.topcard}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize,
        backgroundPosition,
      }}
      onClick={() => history.push(link)}
    >
      {/* <div>
    <img className={classes.img1} src={image} alt="logo" />
  </div> */}
      <Typography variant="display2" style={{ color }}>{preHeader}</Typography>
      <Typography variant="display1" style={{ color }}>{title}</Typography>
    </Grid>
  </div>
);

MenuCard.defaultProps = {
  cardData: {
    color: '',
    title: '',
    image: '',
    backgroundSize: '',
    backgroundPosition: '',
    description: '',
    preHeader: '',
    link: '',
  },
};

MenuCard.propTypes = {
  classes: shape({}).isRequired,
  cardData: shape({
    color: string,
    title: string,
    image: string,
    backgroundSize: string,
    backgroundPosition: string,
    description: string,
    preHeader: string,
    link: string,
  }),
  history: shape({}).isRequired,
};

export default compose(
  withStyles(styles),
  withTheme(),
)(MenuCard);
