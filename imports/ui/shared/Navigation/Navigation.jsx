import React from 'react';
import { shape, bool } from 'prop-types';

import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export function NavigationComponent({ classes, authenticated }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Title
        </Typography>
        {authenticated ?
          <Button
            color="inherit"
            onClick={() => Meteor.logout()}
          >
            Logout
          </Button>
          :
          <Button
            color="inherit"
          >
            Login
          </Button>
        }
      </Toolbar>
    </AppBar>
  );
}

NavigationComponent.defaultProps = {
  authenticated: false,
};

NavigationComponent.propTypes = {
  authenticated: bool,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(NavigationComponent);
