import React from 'react';
import { shape, bool } from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import { MenuItem, MenuList } from 'material-ui/Menu';

import SettingsIcon from 'material-ui-icons/Settings';
import BuildIcon from 'material-ui-icons/Build';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';

import NovaAppBar from './NovaAppBar';
import { drawerDashboardOpen, drawerDashboardClose } from '../../modules/utility';

export const drawerWidth = 240;
export const drawerHeight = 45;

const styles = () => ({
  drawerPaperMobile: {
    zIndex: 500,
    backgroundColor: '#EEE',
    width: drawerWidth,
  },
  drawerPaper: {
    zIndex: 500,
    marginTop: drawerHeight,
    backgroundColor: '#EEE',
    width: drawerWidth,
  },
  icon: {
    color: 'inherit',
    marginLeft: 8,
    height: 18,
  },
  listItem: {
    marginLeft: -14,
  },
  menuItem: {
    transition: 'all .7s cubic-bezier(0.25, 0.8, 0.25, 1)',
    fontWeight: 400,
    color: 'rgba(0,0,0,.60)',
    '&:hover': {
      color: 'rgba(0,0,0,.99)',
    },
  },
});

class DrawerNavigationComponent extends React.Component {
  handleDrawerToggle = () => {
    if (this.props.drawerOpen) {
      drawerDashboardClose();
    } else {
      drawerDashboardOpen();
    }
  };

  handleClickMobileMenu = (url) => {
    this.props.history.push(url);
    drawerDashboardClose();
  };

  render() {
    const { classes, history } = this.props;

    const drawer = (
      <MenuList role="menu">
        <MenuItem onClick={() => history.push('/tools')} className={classes.menuItem} >
          <ListItemIcon className={classes.icon}>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText disableTypography inset primary="Tool Finder" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => history.push('/profile')} className={classes.menuItem} >
          <ListItemIcon className={classes.icon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText disableTypography inset primary="Settings" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => history.push('/about')} className={classes.menuItem} >
          <ListItemIcon className={classes.icon}>
            <LightbulbOutlineIcon />
          </ListItemIcon>
          <ListItemText disableTypography inset primary="About Nova" className={classes.listItem} />
        </MenuItem>
      </MenuList>
    );

    const drawerMobile = (
      <MenuList role="menu">
        <MenuItem onClick={() => this.handleClickMobileMenu('/tools')}>
          <ListItemIcon className={classes.icon}>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Tool Finder" />
        </MenuItem>
        <MenuItem onClick={() => this.handleClickMobileMenu('/profile')}>
          <ListItemIcon className={classes.icon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
        </MenuItem>
        <MenuItem onClick={() => this.handleClickMobileMenu('/about')}>
          <ListItemIcon className={classes.icon}>
            <LightbulbOutlineIcon />
          </ListItemIcon>
          <ListItemText inset primary="About Nova" />
        </MenuItem>
      </MenuList>
    );

    return (
      <React.Fragment>
        <NovaAppBar handleDrawerToggle={this.handleDrawerToggle} />
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.props.drawerOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMobile,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerMobile}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="persistent"
            open={this.props.drawerOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

DrawerNavigationComponent.defaultProps = {
  drawerOpen: false,
};

DrawerNavigationComponent.propTypes = {
  classes: shape({}).isRequired,
  drawerOpen: bool,
  history: shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerNavigationComponent);
