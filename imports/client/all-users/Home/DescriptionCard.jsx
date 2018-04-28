import React from 'react';
import { shape, string } from 'prop-types';

import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import styles from './DescriptonCard.styles';

const DescriptionCardC = ({
  classes,
  cardData: {
    title,
    description,
  },
}) => (
  <Grid className={classes.topcard}>
    <Grid className={classes.textContainer} container direction="column" wrap="nowrap" >
      <div className={classes.titleText}>{title}</div>
      <Divider />
      <div className={classes.bodyText}>{description}</div>
    </Grid>
  </Grid>
);

DescriptionCardC.defaultProps = {
  cardData: {
    description: '',
    title: '',
  },
};

DescriptionCardC.propTypes = {
  classes: shape({}).isRequired,
  cardData: shape({
    title: string,
    description: string,
  }),
};

export default withStyles(styles, { withTheme: true })(DescriptionCardC);
