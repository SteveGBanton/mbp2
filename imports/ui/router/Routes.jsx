/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import { Session } from 'meteor/session';
import { bool, string, shape } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { compose } from 'recompose';

import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';

import { snackBarClose } from '../../modules/utility';

// Dashboard layouts
// import AllUserAccess from '../all-users/AllUserAccess';
import Dashboard from '../dashboard/Dashboard';
import Public from '../public-only/Public';
import ToolSelector from '../dashboard/ToolSelector';
import Tool from '../dashboard/Tool';

// Dashboard pages
import Index from '../dashboard/Index/Index';
import Profile from '../dashboard/Profile/Profile';

// Public Only pages
import Login from '../public-only/Login/Login';
import Signup from '../public-only/Signup/Signup';

// All users pages
import Home from '../all-users/Home/Home';
import VerifyEmail from '../all-users/VerifyEmail';

// Shared
import NotFound from '../shared/NotFound/NotFound';

import styles from './Routes.styles';
import ScrollToTop from './scrollToTop';

class Routes extends React.Component {
  state = {
    menuOpen: true,
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    const { props } = this;
    const { active, message } = this.props.snackBar;
    return (
      <div className={props.classes.root}>
        <Router>
          <ScrollToTop>
            {
              (!props.loading) ?
                <Switch>
                  <Dashboard
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
                  <Dashboard
                    exact
                    path="/tools"
                    component={Index}
                    {...props}
                  />
                  <Dashboard
                    exact
                    path="/tools/:phaseId/:categoryId"
                    component={ToolSelector}
                    {...props}
                  />
                  <Dashboard
                    exact
                    path="/tools/:phaseId"
                    component={ToolSelector}
                    {...props}
                  />
                  <Dashboard
                    exact
                    path="/tool/:toolId"
                    component={Tool}
                    {...props}
                  />
                  <Dashboard
                    exact
                    path="/profile"
                    component={Profile}
                    {...props}
                  />
                  <Route
                    exact
                    path="/verify-email/:tokenId"
                    component={VerifyEmail}
                    {...props}
                  />
                  <Route
                    component={NotFound}
                  />
                </Switch>
                : ''
            }
          </ScrollToTop>
        </Router>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={active}
          autoHideDuration={6000}
          onClose={snackBarClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={snackBarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

Routes.defaultProps = {
  userId: '',
  snackBar: {
    active: false,
    message: '',
  },
};

Routes.propTypes = {
  loading: bool.isRequired,
  userId: string,
  snackBar: shape({
    active: bool,
    message: string,
  }),
};

export default compose(
  withStyles(styles),
  withTracker(() => {
    const loggingIn = Meteor.loggingIn();
    const user = Meteor.user();
    const userId = Meteor.userId();
    const loading = !Roles.subscription.ready();

    const snackBar = Session.get('snackBar');
    const isDashboardDrawerOpen = Session.get('isDashboardDrawerOpen');

    return {
      loading,
      loggingIn,
      authenticated: !loggingIn && !!userId,
      user,
      userId,
      snackBar,
      isDashboardDrawerOpen,
    };
  }),
)(Routes);
