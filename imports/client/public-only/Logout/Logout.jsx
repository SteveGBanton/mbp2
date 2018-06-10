import React from 'react';
import { shape } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './Logout.styles';

const Logout = ({ classes }) => (
  <div className={classes.logout}>
    <h1>You are now logged out.</h1>
  </div>
);

Logout.propTypes = {
  classes: shape({}).isRequired,
};

export default withStyles(styles)(Logout);
