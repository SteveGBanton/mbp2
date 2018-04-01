import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    backgroundColor: '#fff',
    height: 50,
    position: 'absolute',
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
  },
  toolbarSpacer: theme.mixins.toolbar,
  toolbar: {
    minHeight: 50,
  },
  drawerPaperMobile: {
    zIndex: 500,
    backgroundColor: '#fff',
    width: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   position: 'relative',
    // },
  },
  drawerPaper: {
    zIndex: 500,
    marginTop: 50,
    backgroundColor: '#fff',
    width: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   position: 'relative',
    // },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  logo: {
    width: 90,
    padding: 10,
    margin: 'auto',
    display: 'block',
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <List>Item 1</List>
        <Divider />
        <List>Item 2</List>
      </div>
    );

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar classes={{ root: classes.toolbar }}>
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
            open={this.state.mobileOpen}
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
            open={this.state.mobileOpen}
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

ResponsiveDrawer.propTypes = {
  classes: shape({}).isRequired,
  theme: shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
