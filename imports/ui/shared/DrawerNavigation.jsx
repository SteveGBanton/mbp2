import React from 'react';
import { shape, bool } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import { MenuItem, MenuList } from 'material-ui/Menu';

import MenuIcon from 'material-ui-icons/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import BuildIcon from 'material-ui-icons/Build';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';

import { drawerDashboardOpen, drawerDashboardClose } from '../../modules/utility';

export const drawerWidth = 240;
export const drawerHeight = 45;

const styles = () => ({
  appBar: {
    backgroundColor: '#fff',
    height: drawerHeight,
  },
  toolbar: {
    padding: '0 12px 0 12px',
    minHeight: drawerHeight,
  },
  drawerPaperMobile: {
    zIndex: 500,
    backgroundColor: '#fff',
    width: drawerWidth,
  },
  drawerPaper: {
    zIndex: 500,
    marginTop: drawerHeight,
    backgroundColor: '#fff',
    width: drawerWidth,
  },
  logo: {
    width: 90,
    padding: 10,
    margin: 'auto',
    display: 'block',
  },
  icon: {
    marginLeft: 8,
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

  render() {
    const { classes, theme, history } = this.props;

    const drawer = (
      <MenuList role="menu">
        <MenuItem onClick={() => history.push('/tools')}>
          <ListItemIcon className={classes.icon}>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Tool Finder" />
        </MenuItem>
        <MenuItem onClick={() => history.push('/profile')}>
          <ListItemIcon className={classes.icon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
        </MenuItem>
        <MenuItem onClick={() => history.push('/about')}>
          <ListItemIcon className={classes.icon}>
            <LightbulbOutlineIcon />
          </ListItemIcon>
          <ListItemText inset primary="About Nova" />
        </MenuItem>
      </MenuList>
    );

    return (
      <div>
        <AppBar className={classes.appBar} fixed="true">
          <Toolbar disableGutters classes={{ root: classes.toolbar }}>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              <img className={classes.logo} src="http://localhost:1250/assets/logo.png" alt="logo" />
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.props.drawerOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMobile,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
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
      </div>
    );
  }
}

DrawerNavigationComponent.defaultProps = {
  drawerOpen: false,
};

DrawerNavigationComponent.propTypes = {
  classes: shape({}).isRequired,
  theme: shape({}).isRequired,
  drawerOpen: bool,
};

export default withStyles(styles, { withTheme: true })(DrawerNavigationComponent);
