import React, { Component } from 'react';
// import { Row, Col, FormGroup, ControlLabel, Button } from 'react-bootstrap';
// import validate from '../../../modules/validate';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';

import customFormValidator from '../../../../modules/custom-form-validator';

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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formValidate = this.formValidate.bind(this);

    this.state = ({
      formErrors: {
        password: "",
        emailAddress: "",
      },
    });
  }

  formValidate() {
    const input = {
      emailAddress: this.emailAddress.value,
      password: this.password.value,
    };

    const formErrors = customFormValidator(input, rules, messages);

    if (!formErrors) {
      this.handleSubmit();
    } else {
      this.setState({ formErrors });
    }
  }

  handleSubmit() {
    const { history } = this.props;

    Meteor.loginWithPassword(this.emailAddress.value, this.password.value, (error) => {
      if (error) {
        Bert.alert('Please check your username or password.', 'danger');
      } else {
        Bert.alert('Welcome back!', 'success');
        history.push('/signup');
      }
    });
  }

  signUpFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email'],
    }, (err) => {
      if (err) {
        console.log(err);
        // handle error
      } else {
        console.log(Meteor.user());
        // successful login!
      }
    });
  }

  signUpGoogle() {
    Meteor.loginWithGoogle({
      requestPermissions: ['email'],
    }, (err) => {
      if (err) {
        console.log(err);
        // handle error
      } else {
        console.log(Meteor.user());
        // successful login!
      }
    });
  }

  render() {
    return (
      <Paper className="Login">
        <h2>Sign In To Your Account</h2>

        <form onSubmit={event => event.preventDefault()}>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpFacebook}
            style={{ margin: '10px 0 0 0', backgroundColor: "#3b5998" }}
          >
            <span style={{ color: 'white' }}>
              Facebook Sign In
            </span>
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpGoogle}
            style={{ margin: '10px 0 0 0', backgroundColor: "#EA4335" }}
          >
            <span style={{ color: 'white' }}>Google Sign In</span>
          </Button>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'row nowrap', marginTop: 20 }}>
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
            style={{ margin: "35px 0 20px 0" }}
          >
            Log In
          </Button>

        </form>


      </Paper>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
