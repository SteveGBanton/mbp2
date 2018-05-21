import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';

import { snackBarOpen } from '../../../modules/utility';
import fzValidator from '../../../modules/fzValidator';

import styles from './Login.styles';

const rules = {
  emailAddress: {
    required: true,
    email: true,
  },
  password: {
    required: true,
  },
};

const messages = {
  emailAddress: {
    required: 'Please enter your email address.',
    email: 'Is this email address correct?',
  },
  password: {
    required: 'Please enter your password.',
  },
};

export class login extends Component {
  state = ({
    formErrors: {
      password: '',
      emailAddress: '',
    },
  });

  formValidate = () => {
    const input = {
      emailAddress: this.emailAddress.value,
      password: this.password.value,
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

    Meteor.loginWithPassword(this.emailAddress.value, this.password.value, (error) => {
      if (error) {
        snackBarOpen('Please check your username or password.');
      } else {
        snackBarOpen('Welcome back!');
        history.push('/signup');
      }
    });
  };

  signUpFacebook = () => {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email'],
    }, (err) => {
      if (err) {
        // console.log(err);
        // handle error
      } else {
        // console.log(Meteor.user());
        // successful login!
      }
    });
  };

  signUpGoogle = () => {
    Meteor.loginWithGoogle({
      requestPermissions: ['email'],
    }, (err) => {
      if (err) {
        // handle error
      } else {
        // successful login!
      }
    });
  };

  render() {
    return (
      <Paper className="Login">
        <h2>Sign In To Your Account</h2>

        <form onSubmit={event => event.preventDefault()}>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpFacebook}
            style={{ margin: '10px 0 0 0', backgroundColor: '#3B5998' }}
          >
            <span style={{ color: 'white' }}>
              Facebook Sign In
            </span>
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpGoogle}
            style={{ margin: '10px 0 0 0', backgroundColor: '#EA4335' }}
          >
            <span style={{ color: 'white' }}>Google Sign In</span>
          </Button>

          <div style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexFlow: 'row nowrap',
              marginTop: 20,
            }}
          >
            <Icon className="material-icons">
              remove
            </Icon>
            OR
            <Icon className="material-icons">
              remove
            </Icon>
          </div>

          <TextField
            name="username"
            floatingLabelText="Email Address"
            inputRef={(input) => { this.emailAddress = input; }}
            errorText={this.state.formErrors.emailAddress}
          /> <br />

          <TextField
            name="password"
            type="password"
            floatingLabelText="Password"
            inputRef={(password) => { this.password = password; }}
            errorText={this.state.formErrors.password}
          />

          <Button
            type="submit"
            fullWidth
            onClick={this.formValidate}
            style={{ margin: '35px 0 20px 0' }}
          >
            Log In
          </Button>
        </form>
      </Paper>);
  }
}

login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(login);
