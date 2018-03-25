import React from 'react';

import { withStyles } from 'material-ui/styles';
import styles from './Logout.styles';

const Logout = ({ classes }) => (
  <div className={classes.logout}>
    <h1>You are now logged out.</h1>
  </div>
);

Logout.propTypes = {};

export default withStyles(styles)(Logout);
