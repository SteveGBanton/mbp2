import React from 'react';
import { bool, func, shape } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import DrawerNavigation from '../shared/DrawerNavigation';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: 1000 + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

// const validateUser = function validateCurrentUser(role, group) {
//   return (Roles.userIsInRole(Meteor.userId(), [role], group));
// };

export class DashboardComponent extends React.Component {
  state = {
    menuOpen: true,
  };


  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    const {
      loggingIn, authenticated, component, user, classes, ...rest
    } = this.props;
    return (
      <div className={classes.root}>
        <DrawerNavigation />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Route
            {...rest}
            render={props => (authenticated ? React.createElement(
              component,
              {
                ...props,
                loggingIn,
                authenticated,
                user,
              },
            ) : <Redirect to="/" />)}
          />
        </div>
      </div>
    );
  }
}

DashboardComponent.defaultProps = {
  user: null,
};

DashboardComponent.propTypes = {
  loggingIn: bool.isRequired,
  authenticated: bool.isRequired,
  component: func.isRequired,
  user: shape({}),
  classes: shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardComponent);
