import React from 'react';
import { func, bool, shape } from 'prop-types';
import { Route } from 'react-router-dom';

import Navigation from '../shared/Navigation/Navigation';

const AllUserAccess = ({
  loggingIn,
  authenticated,
  component,
  user,
  classes,
  ...rest
}) => (
  <div>
    <Navigation
      authenticated={authenticated}
    />
    <Route
      {...rest}
      render={props => (
        React.createElement(component, { ...props, loggingIn, authenticated })
      )}
    />
  </div>
);

AllUserAccess.defaultProps = {
  loggingIn: false,
  authenticated: false,
  user: null,
  classes: {},
};

AllUserAccess.propTypes = {
  loggingIn: bool,
  authenticated: bool,
  component: func.isRequired,
  user: shape({}),
  classes: shape({}),
};

export default AllUserAccess;
