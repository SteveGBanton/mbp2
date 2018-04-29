import React from 'react';
import { bool, func, shape } from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';
import Hidden from 'material-ui/Hidden';

import { designPhases, tools } from '../tool-data/toolData';
import DrawerNavigation, { drawerWidth, drawerHeight } from '../shared/DrawerNavigation';

const styles = () => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
  },
  appBar: {
    zIndex: 1000 + 1,
  },
  content: {
    height: `calc(100vh - ${drawerHeight}px)`,
    width: '100%',
    padding: 0,
    marginTop: drawerHeight,
    overflow: 'auto',
  },
  drawerOpen: {
    minWidth: drawerWidth,
    height: '100%',
    padding: 0,
    margin: 0,
    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
  drawerClosed: {
    minWidth: 0,
    height: '100%',
    padding: 0,
    margin: 0,
    transition: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
});

// const validateUser = function validateCurrentUser(role, group) {
//   return (Roles.userIsInRole(Meteor.userId(), [role], group));
// };

export class DashboardComponent extends React.Component {
  state = {
    firstTimeDialog: false, // this.props.user ? this.props.user.firstLogin : false,
  };

  toggleUserFirstLoginClose = () => {
    Meteor.call('users.firstTimeUserLogged', () => {
      this.setState({
        firstTimeDialog: false,
      });
    });
  };

  render() {
    const {
      drawerOpen,
      loggingIn,
      authenticated,
      component,
      user,
      classes,
      history,
      ...rest
    } = this.props;
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <div className={classes.drawerClosed}>
            <DrawerNavigation
              drawerOpen={this.props.drawerOpen}
              history={this.props.history}
              authenticated={authenticated}
              user={user}
            />
          </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <div
            className={classNames({
              [classes.drawerClosed]: !this.props.drawerOpen,
              [classes.drawerOpen]: !!this.props.drawerOpen,
            })}
          >
            <DrawerNavigation
              drawerOpen={this.props.drawerOpen}
              history={this.props.history}
              authenticated={authenticated}
              user={user}
            />
          </div>
        </Hidden>
        <div
          className={classes.content}
        >
          <Route
            {...rest}
            render={props => (authenticated ? React.createElement(
              component,
              {
                ...props,
                loggingIn,
                authenticated,
                user,
                designPhases,
                tools,
              },
            ) : <Redirect to="/login" />)}
          />
        </div>
        {this.state.firstTimeDialog ?
          <Dialog
            open={this.state.firstTimeDialog}
            onClose={this.toggleUserFirstLoginClose}
          >
            <DialogTitle>Welcome to Nova!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Nova is a set of design thinking tools to help you and your
                team come up with creative solutions to your business problems.
                {"We're glad to have you on board!"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.toggleUserFirstLoginClose} color="primary" autoFocus>
                Use The Tools!
              </Button>
            </DialogActions>
          </Dialog>
          :
          ''
        }
      </div>
    );
  }
}

DashboardComponent.defaultProps = {
  user: null,
  drawerOpen: false,
};

DashboardComponent.propTypes = {
  loggingIn: bool.isRequired,
  authenticated: bool.isRequired,
  component: func.isRequired,
  user: shape({}),
  classes: shape({}).isRequired,
  drawerOpen: bool,
  history: shape({}).isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  withTracker(() => {
    const drawerOpen = Session.get('isDashboardDrawerOpen');
    return {
      drawerOpen,
    };
  }),
)(DashboardComponent);
