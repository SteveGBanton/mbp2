import React from 'react';
import { bool, func, shape } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
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
    firstTimeDialog: true, // this.props.user ? this.props.user.firstLogin : false,
  };

  toggleState = (property) => {
    this.setState({
      [property]: !this.state.menuOpen,
    });
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
      loggingIn, authenticated, component, user, classes, ...rest
    } = this.props;
    console.log(user)
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
};

DashboardComponent.propTypes = {
  loggingIn: bool.isRequired,
  authenticated: bool.isRequired,
  component: func.isRequired,
  user: shape({}),
  classes: shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardComponent);
