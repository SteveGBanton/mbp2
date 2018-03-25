import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles'; 

import styles from './Home.styles';

const Home = ({ history, authenticated, classes }) => (
  <div className={classes.homeContainer}>
    <div>
      Welcome to Yago, a simple URL shortener service.
      { authenticated ?
        <p style={{ fontSize: 13 }}>
          Please enter a link or go to your <Link to="/dashboard">Dashboard</Link> to get started.
        </p>
        :
        <p style={{ fontSize: 13 }}>
          Please enter a link or <a href="/login">login</a> to get started.
        </p>
      }
    </div>
  </div>
);

Home.propTypes = {
  history: PropTypes.shape({}).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Home);
