import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { ASSET_FOLDER } from '../../../startup/configuration';
import { snackBarOpen } from '../../../modules/utility';

import styles from './Signup.styles';

import fzValidator from '../../../modules/fzValidator';

const signupFormRules = {
  email: {
    required: true,
    maxLength: 50,
    email: true,
  },
  password: {
    required: true,
    password: true,
    maxLength: 30,
  },
  verifyPassword: {
    required: true,
  },
};

const signupErrorMessages = {
  email: {
    required: 'This field is required',
    email: 'Please enter a valid email',
    maxLength: 'Email field is too long!',
  },
  password: {
    required: 'This field is required',
    password: 'Keep your account safe: please enter at least 9 characters, one uppercase letter and one number.',
    maxLength: 'Password can be at most 30 characters!',
  },
  verifyPassword: {
    required: 'This field is required',
    password: 'Keep your account safe: please enter at least 9 characters, one uppercase letter and one number.',
    maxLength: 'Password can be at most 30 characters!',
  },
};

function signUpFacebook() {
  Meteor.loginWithFacebook({
    requestPermissions: ['public_profile', 'email'],
  }, (err) => {
    if (err) {
      // handle error
    } else {
      // successful login!
    }
  });
}

function signUpGoogle() {
  Meteor.loginWithGoogle({
    requestPermissions: ['email'],
  }, (err) => {
    if (err) {
      // handle error
    } else {
      // successful login!
    }
  });
}

export class SignupComponent extends React.Component {
  state = ({
    formErrors: {},
    verifyPassword: '',
    email: '',
    password: '',
  });

  formValidate = () => {
    const { email, password, verifyPassword } = this.state;

    const input = {
      email,
      password,
      verifyPassword,
    };

    let formErrors = fzValidator(input, signupFormRules, signupErrorMessages);

    if (password !== verifyPassword && formErrors === false) {
      formErrors = {};
      formErrors.verifyPassword = 'Passwords must match!';
    } else if (password !== verifyPassword) {
      formErrors.verifyPassword = 'Passwords must match!';
    }

    if (!formErrors) {
      this.handleSubmit({
        verifyPassword,
        email,
        password,
      });
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = ({ email, password, verifyPassword }) => {
    const { history } = this.props;
    const newUser = {
      email,
      password,
      verifyPassword,
    };

    Meteor.call('users.createNewUser', newUser, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        Meteor.loginWithPassword(
          email,
          password,
          (loginError) => {
            if (loginError) {
              snackBarOpen('Error Logging In');
            } else {
              Meteor.call('users.sendVerificationEmail');
              snackBarOpen('Welcome!');
              history.push('/tools');
            }
          },
        );
      }
    });
  };

  handleChangeField = field => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.root}
        container
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <a href="/">
          <img
            className={classes.logo}
            src={`${ASSET_FOLDER}/logo-b.png`}
            alt="logo"
          />
        </a>
        <Paper
          className={classes.signupBox}
          elevation={14}
        >
          <form onSubmit={event => event.preventDefault()}>
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <div className={classes.headlineText}>Signup</div>
              <Button
                type="submit"
                onClick={signUpFacebook}
                className={classes.facebook}
              >
                Facebook Sign up
              </Button>
              <Button
                type="submit"
                onClick={signUpGoogle}
                className={classes.google}
              >
                Google Sign up
              </Button>
              <Grid item style={{ width: '100%', height: 5, margin: 25 }}>
                <Divider light style={{ color: '#000' }} />
              </Grid>
              <Input
                disableUnderline
                className={classes.input}
                id="choose-email"
                autoComplete="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChangeField('email')}
                error={!!this.state.formErrors.email}
                inputProps={{
                  maxLength: 50,
                }}
              />
              {this.state.formErrors.email ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.email}
                </FormHelperText>
                :
                ''
              }
              <Input
                disableUnderline
                className={classes.input}
                id="choose-password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.handleChangeField('password')}
                error={!!this.state.formErrors.password}
                inputProps={{
                  maxLength: 30,
                }}
              />
              <Input
                disableUnderline
                className={classes.input}
                id="verify-password"
                type="password"
                placeholder="Verify Password"
                autoComplete="new-password"
                value={this.state.verifyPassword}
                onChange={this.handleChangeField('verifyPassword')}
                error={!!this.state.formErrors.verifyPassword}
                inputProps={{
                  maxLength: 30,
                }}
              />
              {this.state.formErrors.password || this.state.formErrors.verifyPassword ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.password || this.state.formErrors.verifyPassword}
                </FormHelperText>
                :
                ''
              }
              <Button className={classes.signup} onClick={this.formValidate}>
                Sign up
              </Button>
            </Grid>
          </form>
        </Paper>
        <p>Already have an account? <Link to="/login">Log In</Link>.</p>
      </Grid>
    );
  }
}

SignupComponent.propTypes = {
  history: shape({}).isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(SignupComponent);
