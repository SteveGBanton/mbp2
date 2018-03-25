import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navigation from '../../shared/Navigation/Navigation';

const AllUserAccess = ({
  loggingIn,
  authenticated,
  component,
  history,
  user,
  ...rest
}) => (
  <div className="all-access">
    <Navigation />
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
