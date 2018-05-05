import React from 'react';
import { bool, func, shape } from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';

import NovaAppBar from '../shared/NovaAppBar';
import { designPhases, tools } from '../tool-data/toolData';
import { drawerHeight } from '../shared/DrawerNavigation';

const styles = () => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
  },
  appBar: {
    zIndex: 1000 + 1,
  },
  content: {
    height: `calc(100vh - ${drawerHeight}px)`,
    width: '100%',
    padding: 0,
    marginTop: drawerHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

const AllUserAccessC = ({
  drawerOpen,
  loggingIn,
  authenticated,
  component,
  user,
  classes,
  history,
  ...rest
}) => (
  <div className={classes.root}>
    <NovaAppBar
      disableDrawerOpenButton
      authenticated={authenticated}
    />
    <div className={classes.content}>
      <Route
        {...rest}
        render={props => React.createElement(
          component,
          {
            ...props,
            loggingIn,
            authenticated,
            user,
            designPhases,
            tools,
          },
        )}
      />
    </div>
  </div>);

AllUserAccessC.defaultProps = {
  user: null,
  drawerOpen: false,
};

AllUserAccessC.propTypes = {
  loggingIn: bool.isRequired,
  authenticated: bool.isRequired,
  component: func.isRequired,
  user: shape({}),
  classes: shape({}).isRequired,
  drawerOpen: bool,
  history: shape({}).isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
)(AllUserAccessC);
