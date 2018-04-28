import React from 'react';
import { shape, string } from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';

import styles from './MenuCard.styles';

const MenuCardC = ({
  classes,
  history,
  cardData: {
    title,
    image,
    preHeader,
    link,
    backgroundColor,
  },
}) => (
  <div>
    <Grid
      className={classes.topcard}
      style={{
        backgroundColor,
      }}
      onClick={() => history.push(link)}
    >
      <Grid className={classes.bkImage} container justify="center" alignItems="center">
        <img src={image} alt="" />
      </Grid>
      <Grid className={classes.textContainer} container justify="center" alignItems="center" direction="column" wrap="nowrap" >
        <div className={classes.preHeaderText}>{preHeader}</div>
        <Typography variant="display1" style={{ color: '#545454' }}>{title}</Typography>
      </Grid>
    </Grid>
  </div>
);

MenuCardC.defaultProps = {
  cardData: {
    color: '',
    title: '',
    image: '',
    backgroundSize: '',
    backgroundPosition: '',
    description: '',
    preHeader: '',
    link: '',
    backgroundColor: '',
  },
};

MenuCardC.propTypes = {
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
    backgroundColor: string,
  }),
  history: shape({}).isRequired,
};

export default compose(
  withStyles(styles),
  withTheme(),
  withRouter,
)(MenuCardC);
