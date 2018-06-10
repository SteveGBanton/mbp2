/* eslint-disable no-underscore-dangle */

import React from 'react';
import { bool, shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';

import OAuthProfile from './oAuthProfile';
import EmailProfile from './emailProfile';

import Loading from '../../shared/Loading/Loading';

import styles from './Profile.styles';

function getUserType(user) {
  if (user.emails && user.emails[0]) {
    return 'password';
  }
  return 'oauth';
}

class Profile extends React.Component {
  renderProfileForm = (loading, user) => (
    !loading && user ? ({
      password: () => <EmailProfile user={user} />,
      oauth: () => <OAuthProfile user={user} />,
    }[getUserType(user)])(loading, user) : <Loading />);

  render() {
    const { loading, user, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <div className={classes.pageTitleText}>
            Edit Profile
          </div>
          {this.renderProfileForm(loading, user)}
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  user: {},
};

Profile.propTypes = {
  loading: bool.isRequired,
  user: shape({}),
  classes: shape({}).isRequired,
};

export default compose(
  withTracker(() => {
    const subscription = Meteor.subscribe('users.editProfile');

    return {
      loading: !subscription.ready(),
    };
  }),
  withStyles(styles),
)(Profile);
