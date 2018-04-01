import React from 'react';
import { shape } from 'prop-types';

const Dashboard = ({ history, user }) => (
  <div>
    <h1>Dashboard Page</h1>
  </div>
);

Dashboard.propTypes = {
  history: shape({}).isRequired,
};

export default Dashboard;
