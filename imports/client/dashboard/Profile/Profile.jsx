/* eslint-disable no-underscore-dangle */

import React from 'react';
import { bool, shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

import { snackBarOpen } from '../../../modules/utility';

import Loading from '../../shared/Loading/Loading';

import fzValidator from '../../../modules/fzValidator';

import styles from './Profile.styles';

const rules = {
  firstName: {
    maxLength: 20,
  },
  lastName: {
    maxLength: 20,
  },
  emailAddress: {
    email: true,
  },
  newPassword: {
    password: true,
  },
};

const messages = {
  firstName: {
    maxLength: 'Please enter no more than 20 characters',
  },
  lastName: {
    maxLength: 'Please enter no more than 20 characters',
  },
  emailAddress: {
    email: 'Is this email address correct?',
  },
  currentPassword: {
    required: 'Current password is required to change profile.',
  },
  newPassword: {
    password: 'Keep your account safe: at least 9 characters required, at least one uppercase letter and one number. Special characters allowed: $%@#£€*?&',
  },
};

function resendVerification() {
  Meteor.call('users.sendVerificationEmail', (err) => {
    if (err) {
      snackBarOpen('Error sending verification email');
    } else {
      snackBarOpen('Verification email sent to address on file.');
    }
  });
}

function getUserType(user) {
  if (user.emails && user.emails[0]) {
    return 'password';
  }
  return 'oauth';
}

class Profile extends React.Component {
  state = ({
    formErrors: {},
    currentEmail: (this.props.user.emails) ? this.props.user.emails[0].address : '',
    verifiedEmail: (this.props.user.emails) ? this.props.user.emails[0].verified : '',
  });

  formValidate = () => {
    const input = {};

    if (this.emailAddress &&
      this.emailAddress.input.value) input.emailAddress = this.emailAddress.input.value;
    if (this.firstName &&
      this.firstName.input.value) input.firstName = this.firstName.input.value;
    if (this.lastName &&
      this.lastName.input.value) input.lastName = this.lastName.input.value;
    if (this.currentPassword &&
      this.currentPassword.input.value) input.currentPassword = this.currentPassword.input.value;
    if (this.newPassword &&
      this.newPassword.input.value) input.newPassword = this.newPassword.input.value;

    const formErrors = fzValidator(input, rules, messages);
    let currentPwdRequired = true;

    if ((this.newPassword && this.newPassword.input.value) && (this.currentPassword && this.currentPassword.input.value) === '') {
      formErrors.currentPassword = 'Current password is required to change password';
    } else {
      currentPwdRequired = false;
    }

    if (!formErrors && currentPwdRequired === false) {
      this.handleSubmit();
      this.setState({ formErrors });
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = () => {
    const { verifiedEmail } = this.state;
    const { currentEmail } = this.state;
    let emailChanged = false;

    const profile = {
      previousEmailAddress: currentEmail,
      profile: {
        name: {
          first: this.firstName.input.value,
          last: this.lastName.input.value,
        },
      },
    };

    if (this.emailAddress &&
      this.emailAddress.input.value) profile.emailAddress = this.emailAddress.input.value;

    if (this.emailAddress && this.emailAddress.input.value !== currentEmail) {
      emailChanged = true;
    }

    Meteor.call('users.editProfile', profile, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        if (emailChanged || verifiedEmail === false) {
          Meteor.call('users.sendVerificationEmail');
        }
        snackBarOpen('Profile updated!');
      }
    });

    if (this.newPassword && this.newPassword.input.value) {
      Accounts.changePassword(
        this.currentPassword.input.value,
        this.newPassword.input.value,
        (error) => {
          if (error) {
            snackBarOpen(error.reason);
          } else {
            this.currentPassword.input.value = '';
            this.newPassword.input.value = '';
          }
        },
      );
    }
  };

  renderOAuthUser = (loading, user) => (
    <div className="OAuthProfile">
      {Object.keys(user.services).map(service => (
        <div key={service} className={`LoggedInWith ${service}`}>
          <div className="ServiceIcon"><i className={`fa fa-${service === 'facebook' ? 'facebook-official' : service}`} /></div>
          <p>{`You're logged in with ${service} using the email address ${user.services[service].email}.`}</p>
        </div>
      ))}

      <form className="profile-edit" onSubmit={event => event.preventDefault()}>

        <div className="profile-edit-1">

          <TextField
            defaultValue={(user.profile && user.profile.name && user.profile.name.first) ? user.profile.name.first : ''}
            name="firstName"
            floatingLabelText="First Name"
            ref={(input) => { this.firstName = input; }}
            errorText={this.state.formErrors.firstName}
          /><br />

          <TextField
            defaultValue={(user.profile && user.profile.name && user.profile.name.last) ? user.profile.name.last : ''}
            name="lastName"
            floatingLabelText="Last Name"
            ref={(input) => { this.lastName = input; }}
            errorText={this.state.formErrors.lastName}
          /><br />

          <div style={{ marginTop: 20 }}>
            <Button type="submit" onClick={this.formValidate}>Update</Button>
          </div>
        </div>
      </form>
    </div>
  );

  renderPasswordUser = (loading, user) => (
    <form className="profile-edit" onSubmit={event => event.preventDefault()}>
      <div className="profile-edit-1">
        <TextField
          defaultValue={user.username}
          disabled
          name="userName"
          floatingLabelText="Username (cannot be changed)"
        />
        <TextField
          defaultValue={(user.profile && user.profile.name && user.profile.name.first) ? user.profile.name.first : ''}
          name="firstName"
          floatingLabelText="First Name"
          ref={(input) => { this.firstName = input; }}
          errorText={this.state.formErrors.firstName}
        /><br />

        <TextField
          defaultValue={(user.profile && user.profile.name && user.profile.name.last) ? user.profile.name.last : ''}
          name="lastName"
          floatingLabelText="Last Name"
          ref={(input) => { this.lastName = input; }}
          errorText={this.state.formErrors.lastName}
        /><br />
      </div>
      <div className="profile-edit-2">
        <TextField
          defaultValue={(user.emails) ? user.emails[0].address : ''}
          name="emailAddress"
          floatingLabelText="Email Address"
          ref={(input) => { this.emailAddress = input; }}
          errorText={this.state.formErrors.emailAddress}
        />
        {
          (user.emails[0].verified === false) ? (
            <IconButton
              touch
              tooltip="Not verified: click to resend verification email"
              tooltipPosition="bottom-center"
              onClick={resendVerification}
            >
              <Icon>email</Icon>
            </IconButton>)
            : (
              <IconButton
                touch
                tooltip="Email Verified"
                tooltipPosition="bottom-center"
              >
                <Icon>checkmark</Icon>
              </IconButton>)
        }
        <br />
        <TextField
          name="currentPassword"
          type="password"
          floatingLabelText="Current Password"
          ref={(currentPassword) => { this.currentPassword = currentPassword; }}
          errorText={this.state.formErrors.currentPassword}
        /><br />
        <TextField
          name="newPassword"
          type="password"
          floatingLabelText="New Password"
          ref={(newPassword) => { this.newPassword = newPassword; }}
          errorText={this.state.formErrors.newPassword}
        /><br /><br /><br />
        <div>
          <Button type="submit" onClick={this.formValidate}>Update</Button>
        </div>
      </div>
    </form>
  );

  renderProfileForm = (loading, user) => (
    !loading ? ({
      password: this.renderPasswordUser,
      oauth: this.renderOAuthUser,
    }[getUserType(user)])(loading, user) : <Loading />);

  render() {
    const { loading, user } = this.props;
    return (
      <div className="Profile">
        <h1>Edit Profile</h1>
        {this.renderProfileForm(loading, user)}
      </div>
    );
  }
}

Profile.propTypes = {
  loading: bool.isRequired,
  user: shape({}).isRequired,
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
