import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';


const AllUserAccess = ({
  loggingIn,
  authenticated,
  component,
  user,
  ...rest
}) => (
  <div className="all-access" style={{ marginTop: '55px' }}>
    <Navigation
      authenticated={authenticated}
      history={history}
      user={user}
      {...rest}
    />
    <Route
      {...rest}
      render={props => (
        React.createElement(component, { ...props, loggingIn, authenticated })
      )}
    />
  </div>
);

AllUserAccess.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func,
};

export default AllUserAccess;
