import React, { Component } from 'react';
import { shape } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';

import { ASSET_FOLDER } from '../../../startup/configuration';

import { snackBarOpen } from '../../../modules/utility';
import fzValidator from '../../../modules/fzValidator';

import styles from './Login.styles';

const rules = {
  email: {
    required: true,
    email: true,
  },
  password: {
    required: true,
  },
};

const messages = {
  email: {
    required: 'Please enter your email address.',
    email: 'Is this email address correct?',
  },
  password: {
    required: 'Please enter your password.',
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

export class LoginC extends Component {
  state = {
    email: '',
    password: '',
    formErrors: {
      password: '',
      email: '',
    },
  };

  formValidate = () => {
    const input = {
      email: this.state.email,
      password: this.state.password,
    };

    const formErrors = fzValidator(input, rules, messages);
    if (!formErrors) {
      this.handleSubmit();
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = () => {
    const { history } = this.props;

    Meteor.loginWithPassword(this.state.email, this.state.password, (error) => {
      if (error) {
        snackBarOpen('Please check your username or password.');
      } else {
        snackBarOpen('Welcome back!');
        history.push('/signup');
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
              <div className={classes.headlineText}>Login</div>
              <Button
                type="submit"
                onClick={signUpFacebook}
                className={classes.facebook}
              >
                Facebook Login
              </Button>
              <Button
                type="submit"
                onClick={signUpGoogle}
                className={classes.google}
              >
                Google Login
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
              {this.state.formErrors.password ?
                <FormHelperText
                  error
                >
                  {this.state.formErrors.password}
                </FormHelperText>
                :
                ''
              }
              <Button className={classes.signup} onClick={this.formValidate}>
                Login
              </Button>
            </Grid>
          </form>
        </Paper>
        <p>{"Don't"} have an account yet? <Link to="/signup">Signup</Link>.</p>
        <p>Forgot password? <Link to="/forgot">Reset your Password</Link>.</p>
      </Grid>
    );
  }
}

LoginC.propTypes = {
  history: shape({}).isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(LoginC);
