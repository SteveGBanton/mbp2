import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';
import { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';

import DrawerNavigation from '../../shared/DrawerNavigation';

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

const validateUser = function validateCurrentUser(role, group) {
  return (Roles.userIsInRole(Meteor.userId(), [role], group));
};

export class ClientAdminComponent extends React.Component {
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

ClientAdminComponent.defaultProps = {
  user: {},
};

ClientAdminComponent.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

export default withStyles(styles, { withTheme: true })(ClientAdminComponent);
