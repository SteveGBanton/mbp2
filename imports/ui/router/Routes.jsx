/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { compose } from 'recompose';

import { withStyles } from 'material-ui/styles';

// Dashboard layouts
import AllUserAccess from '../layouts/AllUserAccess/AllUserAccess';
import ClientAdmin from '../layouts/ClientAdmin/ClientAdmin';
import Public from '../layouts/Public/Public';

// ClientAdmin pages
import Dashboard from '../layouts/ClientAdmin/Dashboard/Dashboard';
import Profile from '../layouts/ClientAdmin/Profile/Profile';

// Public Only pages
import Login from '../layouts/Public/Login/Login';
import Signup from '../layouts/Public/Signup/Signup';

// All users pages
import Home from '../layouts/AllUserAccess/Home/Home';

// Shared
import NotFound from '../shared/NotFound/NotFound';

import styles from './Routes.styles';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuOpen: true,
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const { props } = this;
    return (
      <Router>
        {
          (!props.loading) ?
            <Switch>
              <AllUserAccess
                exact
                path="/"
                component={Home}
                {...props}
                menuOpen={this.state.menuOpen}
              />
              <Public
                exact
                path="/login"
                component={Login}
                {...props}
              />
              <Public
                exact
                path="/signup"
                component={Signup}
                {...props}
              />
              <ClientAdmin
                exact
                path="/dashboard"
                component={Dashboard}
                {...props}
              />
              <ClientAdmin
                exact
                path="/profile"
                component={Profile}
                {...props}
              />
              <AllUserAccess
                component={NotFound}
              />
            </Switch>
            : ''
        }
      </Router>
    );
  }
}

Routes.defaultProps = {
  userId: '',
};

Routes.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
};

export default compose(
  withStyles(styles),
  withTracker(() => {
    const loggingIn = Meteor.loggingIn();
    const user = Meteor.user();
    const userId = Meteor.userId();
    const loading = !Roles.subscription.ready();

    return {
      loading,
      loggingIn,
      authenticated: !loggingIn && !!userId,
      user,
      userId,
    };
  }),
)(Routes);
