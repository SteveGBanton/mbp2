/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Forwarder from '../components/Forwarder/Forwarder';

// Dashboard layoutsd
import AllUserAccess from '../layouts/AllUserAccess/AllUserAccess';
import ClientAdmin from '../layouts/ClientAdmin/ClientAdmin';
import Public from '../layouts/Public/Public';

// ClientAdmin pages
import Dashboard from '../layouts/ClientAdmin/Dashboard/Dashboard';
import Links from '../layouts/ClientAdmin/Links/Links';
import Profile from '../layouts/ClientAdmin/Profile/Profile';
import AddLink from '../layouts/ClientAdmin/Links/AddLink/AddLink';
import ViewLinkStats from '../layouts/ClientAdmin/Links/ViewLinkStats/ViewLinkStats';

// Public Only pages
import Login from '../layouts/Public/Login/Login';

// All users pages
import Index from '../layouts/AllUserAccess/Index/Index';
import NotFound from '../layouts/AllUserAccess/NotFound/NotFound';
import Terms from '../layouts/AllUserAccess/Terms/Terms';
import Privacy from '../layouts/AllUserAccess/Privacy/Privacy';

// Components
import Navigation from '../components/Navigation/Navigation';

import './App.scss';

class App extends React.Component {
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
            <MuiThemeProvider>
              <div className="App">
                <Switch>
                  <AllUserAccess
                    exact
                    path="/"
                    component={Index}
                    {...props}
                    menuOpen={this.state.menuOpen}
                  />
                  <ClientAdmin
                    exact
                    path="/links"
                    component={Links}
                    {...props}
                    menuOpen={this.state.menuOpen}
                  />
                  <ClientAdmin
                    exact
                    path="/add"
                    component={AddLink}
                    {...props}
                    menuOpen={this.state.menuOpen}
                  />
                  <ClientAdmin
                    exact
                    path="/view-link/:shortLink"
                    component={ViewLinkStats}
                    {...props}
                    menuOpen={this.state.menuOpen}
                  />
                  <Public
                    exact
                    path="/login"
                    component={Login}
                    {...props}
                  />
                  <AllUserAccess
                    name="terms"
                    path="/terms"
                    component={Terms}
                  />
                  <AllUserAccess
                    name="privacy"
                    path="/privacy"
                    component={Privacy}
                  />
                  <Route
                    name="forwarder"
                    path="/:shortLink"
                    component={Forwarder}
                  />
                  <AllUserAccess
                    component={NotFound}
                  />
                </Switch>
              </div>
            </MuiThemeProvider>
            : ''
        }
      </Router>
    );
  }
}

App.defaultProps = {
  userId: '',
  emailAddress: '',
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
};

export default createContainer(() => {
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
}, App);
