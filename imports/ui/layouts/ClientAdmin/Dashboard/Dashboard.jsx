import React from 'react';
import PropTypes from 'prop-types';
import LinkAdder from '../../../components/LinkAdder/LinkAdder'

import './Dashboard.scss'

const Dashboard = ({ history, user }) => (
  <div className="dashboard">
    <LinkAdder history={history} />
  </div>
);

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
