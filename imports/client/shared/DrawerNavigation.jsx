import React from 'react';
import { shape, bool } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ListItemText } from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import { MenuItem, MenuList } from '@material-ui/core/Menu';

import NovaAppBar from './NovaAppBar';
import { drawerDashboardOpen, drawerDashboardClose } from '../../modules/utility';
import { ASSET_FOLDER } from '../../startup/configuration';

export const drawerWidth = 240;
export const drawerHeight = 45;

const styles = () => ({
  drawerPaperMobile: {
    zIndex: 500,
    backgroundColor: '#EEE',
    width: drawerWidth,
    paddingTop: 20,
  },
  drawerPaper: {
    zIndex: 500,
    marginTop: drawerHeight,
    backgroundColor: '#EEE',
    width: drawerWidth,
    paddingTop: 30,
  },
  icon: {
    color: 'inherit',
    marginLeft: 8,
    height: 18,
  },
  listItem: {
    marginLeft: -14,
    fontWeight: 300,
  },
  menuItem: {
    transition: 'all .7s cubic-bezier(0.25, 0.8, 0.25, 1)',
    fontWeight: 400,
    color: 'rgba(0,0,0,.60)',
    '&:hover': {
      color: 'rgba(0,0,0,.99)',
    },
  },
  logo: {
    width: 90,
    marginLeft: 57,
    padding: 0,
    display: 'block',
    paddingBottom: 20,
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
    const {
      classes,
      history,
      authenticated,
      user,
    } = this.props;

    const drawer = (
      <MenuList role="menu">
        <MenuItem onClick={() => history.push('/tools')} className={classes.menuItem} >
          <ListItemText disableTypography inset primary="Tool Finder" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => history.push('/profile')} className={classes.menuItem} >
          <ListItemText disableTypography inset primary="Settings" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => history.push('/about')} className={classes.menuItem} >
          <ListItemText disableTypography inset primary="About Nova" className={classes.listItem} />
        </MenuItem>
      </MenuList>
    );

    const drawerMobile = (
      <MenuList role="menu">
        <img className={classes.logo} src={`${ASSET_FOLDER}/logo-b.png`} alt="logo" />
        <MenuItem onClick={() => this.handleClickMobileMenu('/tools')}>
          <ListItemText disableTypography inset primary="Tool Finder" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => this.handleClickMobileMenu('/profile')}>
          <ListItemText disableTypography inset primary="Settings" className={classes.listItem} />
        </MenuItem>
        <MenuItem onClick={() => this.handleClickMobileMenu('/about')}>
          <ListItemText disableTypography inset primary="About Nova" className={classes.listItem} />
        </MenuItem>
      </MenuList>
    );

    return (
      <React.Fragment>
        <NovaAppBar
          handleDrawerToggle={this.handleDrawerToggle}
          authenticated={authenticated}
          user={user}
        />
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
  authenticated: false,
  user: {},
};

DrawerNavigationComponent.propTypes = {
  classes: shape({}).isRequired,
  drawerOpen: bool,
  history: shape({}).isRequired,
  authenticated: bool,
  user: shape({}),
};

export default withStyles(styles, { withTheme: true })(DrawerNavigationComponent);
