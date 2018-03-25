import React from 'react';
import PropTypes from 'prop-types';

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

export function Navigation({ classes, toggleMenu, authenticated }) {
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
          <a href="/login">
            <Button
              color="inherit"
            >
              Login
            </Button>
          </a>
        }
      </Toolbar>
    </AppBar>
  );
}

Navigation.defaultProps = {
  authenticated: false,
};

Navigation.propTypes = {
  authenticated: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Navigation);
