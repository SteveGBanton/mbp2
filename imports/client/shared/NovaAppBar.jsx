import React from 'react';
import { func, shape, bool, string } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu, { MenuItem } from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';

import MenuIcon from 'material-ui-icons/Menu';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';

import { noop } from '../../modules/utility';
import { ASSET_FOLDER } from '../../startup/configuration';

import { drawerHeight } from './DrawerNavigation';

const styles = theme => ({
  appBar: {
    backgroundColor: '#555555',
    height: drawerHeight,
  },
  logo: {
    width: 75,
    margin: 'auto',
    padding: 0,
    display: 'block',
  },
  logoLink: {
    marginLeft: 15,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 12px 0 12px',
    minHeight: drawerHeight,
  },
  menuLeft: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  menuRight: {
    width: 200,
    marginRight: 20,
    '& div': {
      marginLeft: 20,
      color: '#eee',
      '& a': {
        outline: 'none',
        fontWeight: 300,
        fontSize: 14,
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        textDecoration: 'none',
        color: '#eee',
        '&:hover': {
          color: theme.palette.colors.novaTealDark,
        },
      },
    },
  },
  menuRightDashboard: {
    width: 200,
    marginRight: -15,
    '& button': {
      transition: 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)',
      color: '#eee',
      '&:hover': {
        color: theme.palette.colors.novaTealDark,
      },
    },
    '& div': {
      color: '#eee',
      '& a': {
        outline: 'none',
        fontWeight: 300,
        fontSize: 14,
        transition: 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)',
        textDecoration: 'none',
        color: '#eee',
        '&:hover': {
          color: theme.palette.colors.novaTealDark,
        },
      },
    },
  },
  menu: {
    top: 37,
    left: -5,
  },
  menuPaper: {
    backgroundColor: '#EEE',
  },
  menuItem: {
    justifyContent: 'center',
    fontWeight: 300,
  },
});

class NovaAppBarComponent extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = () => {
    this.setState({ anchorEl: document.getElementById('right-menu') });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.history.push('/');
    Meteor.logout();
    this.handleMenuClose();
  };

  leftMenuAuth = () => {
    const { classes, authenticated } = this.props;
    return !authenticated
      ? (
        <Grid id="right-menu" className={classes.menuRight} container alignItems="center" justify="flex-end">
          <Grid item>
            <Link className={classes.link} to="/tools">Tools</Link>
          </Grid>
          <Grid item>
            <Link className={classes.link} to="/login">Login</Link>
          </Grid>
        </Grid>)
      : (
        <Grid id="right-menu" className={classes.menuRight} container alignItems="center" justify="flex-end">
          <Grid item>
            <Link className={classes.link} to="/tools">Tools</Link>
          </Grid>
          <Grid item>
            <Link className={classes.link} to="#" onClick={() => Meteor.logout()}>Logout</Link>
          </Grid>
        </Grid>);
  };

  render() {
    const {
      classes,
      handleDrawerToggle,
      disableDrawerOpenButton,
      user,
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <AppBar className={classes.appBar} position="fixed" elevation={1}>
        <Toolbar disableGutters classes={{ root: classes.toolbar }}>
          <div className={classes.menuLeft} >
            {disableDrawerOpenButton ?
              ''
              :
              <IconButton
                color="secondary"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                style={{
                  color: '#eee',
                }}
              >
                <MenuIcon />
              </IconButton>
            }
            <Link className={classes.logoLink} to="/">
              <img className={classes.logo} src={`${ASSET_FOLDER}/logo.png`} alt="logo" />
            </Link>
          </div>
          {/* TODO: add auth */}
          {!disableDrawerOpenButton ?
            <React.Fragment>
              <Grid
                id="right-menu"
                className={classes.menuRightDashboard}
                container
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <Link className={classes.link} to="#" onClick={this.handleMenuOpen}>
                    {user && user.profile && user.profile.name}
                  </Link>
                </Grid>
                <IconButton
                  aria-haspopup="true"
                  color="secondary"
                  onClick={this.handleMenuOpen}
                >
                  <AccountCircleIcon />
                </IconButton>
              </Grid>
              <Menu
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                className={classes.menu}
                id="account-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleMenuClose}
                classes={{
                  paper: classes.menuPaper,
                }}
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleMenuClose}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleMenuClose}
                >
                  My account
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleLogout}
                >
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
            :
            this.leftMenuAuth()
          }
        </Toolbar>
      </AppBar>);
  }
}

NovaAppBarComponent.defaultProps = {
  disableDrawerOpenButton: false,
  handleDrawerToggle: noop,
  authenticated: false,
  user: {
    profile: {
      name: '',
    },
  },
};

NovaAppBarComponent.propTypes = {
  handleDrawerToggle: func,
  classes: shape({}).isRequired,
  disableDrawerOpenButton: bool,
  authenticated: bool,
  history: shape({}).isRequired,
  user: shape({
    profile: shape({
      name: string,
    }),
  }),
};

export default compose(
  withStyles(styles),
  withRouter,
)(NovaAppBarComponent);
