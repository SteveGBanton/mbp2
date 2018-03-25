import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ history, user }) => (
  <div className="dashboard">
    <h1>Dashboard Page</h1>
  </div>
);

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
