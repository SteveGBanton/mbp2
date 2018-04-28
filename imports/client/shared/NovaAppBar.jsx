import React from 'react';
import { func, shape, bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

import MenuIcon from 'material-ui-icons/Menu';

import { noop } from '../../modules/utility';

import { drawerHeight } from './DrawerNavigation';

const styles = () => ({
  appBar: {
    backgroundColor: '#f9f9f9',
    height: drawerHeight,
  },
  logo: {
    width: 90,
    margin: 'auto',
    padding: 0,
    display: 'block',
  },
  logoLink: {
    marginLeft: 15,
  },
  toolbar: {
    padding: '0 12px 0 12px',
    minHeight: drawerHeight,
  },
});

const NovaAppBarComponent = ({
  classes,
  handleDrawerToggle,
  disableDrawerOpenButton,
}) => (
  <AppBar className={classes.appBar} fixed="true" elevation={1}>
    <Toolbar disableGutters classes={{ root: classes.toolbar }}>
      {disableDrawerOpenButton ?
        ''
        :
        <IconButton
          color="secondary"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      }
      <Link className={classes.logoLink} to="/">
        <img className={classes.logo} src="http://localhost:1250/assets/logo.png" alt="logo" />
      </Link>
    </Toolbar>
  </AppBar>
);

NovaAppBarComponent.defaultProps = {
  disableDrawerOpenButton: false,
  handleDrawerToggle: noop,
};

NovaAppBarComponent.propTypes = {
  handleDrawerToggle: func,
  classes: shape({}).isRequired,
  disableDrawerOpenButton: bool,
};

export default withStyles(styles)(NovaAppBarComponent);
