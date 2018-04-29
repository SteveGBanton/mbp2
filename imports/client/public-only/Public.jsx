import React from 'react';
import { bool, func, shape } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Public = ({
  loggingIn, authenticated, component, user, ...rest
}) => (
  <div className="public">
    <Route
      {...rest}
      render={props => (
        !authenticated ?
        (React.createElement(component, { ...props, loggingIn, authenticated })) :
        (<Redirect to="/tools" />)
      )}
    />
  </div>
);

Public.defaultProps = {
  user: null,
};

Public.propTypes = {
  loggingIn: bool.isRequired,
  authenticated: bool.isRequired,
  component: func.isRequired,
  user: shape({}),
};

export default Public;
