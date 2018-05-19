/* eslint-disable no-underscore-dangle */

import React from 'react';
import { bool, shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

import OAuthProfile from './oAuthProfile';
import EmailProfile from './emailProfile';

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
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.user && nextProps.user.profile && nextProps.user.profile) {
      return {
        name: nextProps.user.profile.name,
      };
    }
    return null;
  }

  state = ({
    formErrors: {},
    currentEmail: (this.props.user.emails) ? this.props.user.emails[0].address : '',
    verifiedEmail: (this.props.user.emails) ? this.props.user.emails[0].verified : '',
    name: '',
    industry: '',
    position: '',
    newPassword: '',
    currentPassword: '',
  });

  handleChange = field => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  formValidate = () => {
    const {
      name,
      industry,
      position,
      newPassword,
      currentPassword,
    } = this.state;

    const input = {};

    const formErrors = fzValidator(input, rules, messages);
    let currentPwdRequired = true;

    if (newPassword && currentPassword === '') {
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

  handleSubmit = (input, newPassword) => {
    const { verifiedEmail, emailChanged, currentPassword } = this.state;
    
    Meteor.call('users.editProfile', input, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        if (emailChanged || verifiedEmail === false) {
          Meteor.call('users.sendVerificationEmail');
        }
        snackBarOpen('Profile updated!');
      }
    });

    if (newPassword) {
      Accounts.changePassword(
        currentPassword,
        newPassword,
        (error) => {
          if (error) {
            snackBarOpen(error.reason);
          } else {
            snackBarOpen('Password successfully changed!');
            this.setState({
              newPassword: '',
              currentPassword: '',
            });
          }
        },
      );
    }
  };

  renderOAuthUser = (loading, user) => {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {user.services.facebook && user.services && (
          <React.Fragment>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.cardTitleText}>
                  Logged in with <span className={classes.fb}>Facebook</span>
                </div>
                <Typography display="body1">
                  You are logged in as <span className={classes.bold}>{user.services.facebook.name}</span> using the email address <span className={classes.bold}>{user.services.facebook.email}</span>.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => Meteor.logout()}
                  style={{ marginLeft: 'auto' }}
                >
                  Log out
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.cardTitleText}>
                  Change Name Used In Nova
                </div>
                <TextField
                  id="name"
                  label="First Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  style={{ marginRight: 20 }}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  style={{ marginLeft: 'auto' }}
                  onClick={this.formValidate}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </React.Fragment>)
        }
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.cardTitleText}>
              Industry and Position
            </div>
            <Typography display="body1">
              In what industry are you using Nova, and what is your positon?
            </Typography>
            <TextField
              id="industry"
              label="Industry"
              className={classes.textField}
              value={this.state.industry}
              onChange={this.handleChange('industry')}
              margin="normal"
              style={{ marginRight: 20 }}
            />
            <TextField
              id="position"
              label="Position"
              className={classes.textField}
              value={this.state.position}
              onChange={this.handleChange('position')}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button type="submit" style={{ marginLeft: 'auto' }} onClick={this.formValidate}>
              Update
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  };

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
