import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkAdder from '../../../components/LinkAdder/LinkAdder';

import './Index.scss';

const Index = ({ history, authenticated }) => (
  <div className="index">
    <div className="index-bg-color" />
    <div className="index-welcome">
      <div>
        <h2>Welcome to Yago, a simple URL shortener service.</h2>
        { authenticated ?
          <p style={{ fontSize: 13 }}>
            Please enter a link or go to your <Link to="/add">Dashboard</Link> to get started.
          </p>
          :
          <p style={{ fontSize: 13 }}>
            Please enter a link or <a href="/login">login</a> to get started.
          </p>
        }
      </div>
    </div>
    <div className="index-linkadder">
      <LinkAdder history={history} />
    </div>
  </div>
);

Index.propTypes = {
  history: PropTypes.shape({}).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Index;
