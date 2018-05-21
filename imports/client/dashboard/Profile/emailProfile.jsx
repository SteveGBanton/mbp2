/* eslint-disable no-underscore-dangle */

import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import get from 'lodash.get';

import Card, { CardActions, CardContent } from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import EmailIcon from 'material-ui-icons/Email';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

import { snackBarOpen } from '../../../modules/utility';
import fzValidator from '../../../modules/fzValidator';
import styles from './Profile.styles';
import { ASSET_FOLDER } from '../../../startup/configuration';

const rules = {
  'profile.name': {
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  'profile.position': {
    maxLength: 30,
  },
  'profile.industry': {
    maxLength: 30,
  },
  emailAddress: {
    email: true,
  },
  newPassword: {
    password: true,
  },
};

const messages = {
  'profile.name': {
    required: 'Please enter a name at least 3 characters long',
    minLength: 'Please enter at least 3 characters for your name',
    maxLength: 'Please enter no more than 30 characters',
  },
  'profile.industry': {
    maxLength: 'Please enter no more than 30 characters',
  },
  'profile.position': {
    maxLength: 'Please enter no more than 30 characters',
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

class oAuthProfile extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      name: get(nextProps, 'user.profile.name'),
      industry: get(nextProps, 'user.profile.industry'),
      position: get(nextProps, 'user.profile.position'),
      email: get(nextProps, 'user.emails[0].address'),
    };
  }

  state = ({
    formErrors: {},
    name: '',
    industry: '',
    position: '',
    newPassword: '',
    verifyNewPassword: '',
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
      verifyNewPassword,
      email,
    } = this.state;

    const input = {
      email,
      profile: {
        name,
        industry,
        position,
      },
    };

    const passwords = {
      newPassword,
      currentPassword,
      verifyNewPassword,
    };

    let formErrors = fzValidator(input, rules, messages);
    let currentPwdRequired = true;

    if (passwords.newPassword !== passwords.verifyNewPassword) {
      formErrors = {};
      formErrors.newPassword = 'New password fields do not match!';
    } else {
      currentPwdRequired = false;
    }

    if (passwords.newPassword && passwords.currentPassword === '') {
      formErrors = {};
      formErrors.currentPassword = 'Current password is required to change password';
    } else {
      currentPwdRequired = false;
    }

    if (!formErrors && !currentPwdRequired) {
      this.handleSubmit(input, passwords);
      this.setState({ formErrors });
    } else {
      snackBarOpen('Sorry, please fix form errors before update!');
      this.setState({ formErrors });
    }
  };

  handleSubmit = (input, passwords) => {
    Meteor.call('users.editProfileEmail', input, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        snackBarOpen('Profile updated!');
      }
    });

    if (passwords.newPassword) {
      Accounts.changePassword(
        passwords.currentPassword,
        passwords.newPassword,
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

  render() {
    const { user, classes } = this.props;
    const { formErrors } = this.state;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Change Profile Name
            </div>
          </CardContent>
          <CardContent>
            <TextField
              id="name"
              label="First Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              style={{ marginRight: 20 }}
              error={Boolean(get(formErrors, 'profile.name'))}
              helperText={get(formErrors, 'profile.name')}
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
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Industry and Position
            </div>
          </CardContent>
          <CardContent>
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
              error={Boolean(get(formErrors, 'profile.industry'))}
              helperText={get(formErrors, 'profile.industry')}
            />
            <TextField
              id="position"
              label="Position"
              className={classes.textField}
              value={this.state.position}
              onChange={this.handleChange('position')}
              margin="normal"
              error={Boolean(get(formErrors, 'profile.position'))}
              helperText={get(formErrors, 'profile.position')}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" style={{ marginLeft: 'auto' }} onClick={this.formValidate}>
              Update
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Change Email Address
            </div>
          </CardContent>
          <CardContent>
            <TextField
              id="emailAddress"
              label="Email Address"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              style={{ marginRight: 20 }}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
            {
              (user.emails[0].verified === false) ?
                <Tooltip id="tooltip-verify" title="Not verified: click to resend verification email">
                  <IconButton onClick={resendVerification}>
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                :
                <Tooltip id="tooltip-verified" title="Email Verified">
                  <IconButton>
                    <CheckCircleIcon />
                  </IconButton>
                </Tooltip>
            }
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
        <Card className={classes.card}>
          <CardContent className={classes.headerColor}>
            <Grid className={classes.bkImage} container justify="flex-start" alignItems="center">
              <img src={`${ASSET_FOLDER}/market.png`} alt="" />
            </Grid>
            <div className={classes.cardTitleText}>
              Change Password
            </div>
          </CardContent>
          <CardContent>
            <form>
              <TextField
                type="password"
                id="newPassword"
                autoComplete="new-password"
                label="New Password"
                className={classes.textField}
                value={this.state.newPassword}
                onChange={this.handleChange('newPassword')}
                margin="normal"
                style={{ marginRight: 20 }}
                error={Boolean(formErrors.newPassword)}
                helperText={formErrors.newPassword}
              />
              <TextField
                type="password"
                id="verifyNewPassword"
                autoComplete="new-password"
                label="Verify New Password"
                className={classes.textField}
                value={this.state.verifyNewPassword}
                onChange={this.handleChange('verifyNewPassword')}
                margin="normal"
                style={{ marginRight: 20 }}
                error={Boolean(formErrors.verifyNewPassword)}
                helperText={formErrors.verifyNewPassword}
              />
              {
                this.state.newPassword ?
                  <div style={{ marginTop: 30 }}>
                    <Typography>
                      For security reasons, please enter your current password:
                    </Typography>
                    <TextField
                      type="password"
                      autoComplete="current-password"
                      id="currentPassword"
                      label="Current Password"
                      className={classes.textField}
                      value={this.state.currentPassword}
                      onChange={this.handleChange('currentPassword')}
                      margin="normal"
                      style={{ marginRight: 20 }}
                      error={Boolean(formErrors.currentPassword)}
                      helperText={formErrors.currentPassword}
                    />
                  </div>
                  :
                  ''
              }
            </form>
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
      </React.Fragment>
    );
  }
}

oAuthProfile.propTypes = {
  user: shape({}).isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(oAuthProfile);
