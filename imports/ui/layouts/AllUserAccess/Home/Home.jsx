import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({ history, authenticated }) => (
  <div className="index">
    <div className="index-welcome">
      <div>
        <h2>Welcome to Yago, a simple URL shortener service.</h2>
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
  </div>
);

Home.propTypes = {
  history: PropTypes.shape({}).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Home;
