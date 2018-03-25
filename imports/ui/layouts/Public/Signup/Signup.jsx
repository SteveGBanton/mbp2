import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { debounce, kebabCase } from 'lodash';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

import customFormValidator from '../../../../modules/custom-form-validator';

const signupFormRules = {
  emailAddress: {
    required: true,
    maxLength: 40,
    email: true,
  },
  username: {
    required: true,
    maxLength: 22,
  },
  password: {
    required: true,
    password: true,
  },
};

const signupErrorMessages = {
  emailAddress: {
    required: "This field is required",
    email: "Please enter a valid email",
  },
  username: {
    required: "This field is required",
  },
  password: {
    required: "This field is required",
    password: "Keep your account safe: at least 9 characters required, at least one uppercase letter and one number. Special characters allowed: $%@#£€*?&",
  },
};

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUsername = debounce(this.createUsername.bind(this), 700);
    this.formValidate = this.formValidate.bind(this);
    this.editUsername = this.editUsername.bind(this);
    this.editUsernameWithOrgName = this.editUsernameWithOrgName.bind(this);

    this.state = ({
      formErrors: {},
      username: "",
      usernameClean: "",
      userNameVerified: false,
      usernameLoading: false,
    });
  }

  createUsername(field) {
    const inputFieldToUse = (field === 'orgName') ? this.orgName.value : this.username.value;

    // put into username format
    const input = kebabCase(inputFieldToUse);
    let number = 0;

    // setting username functions
    const setUsernameTrue = (function (potentialUserName) {
      this.setState({ usernameClean: potentialUserName });
      this.setState({ username: potentialUserName });
      this.setState({ usernameLoading: false });
      this.setState({ userNameVerified: true });
    }).bind(this);

    const setUsernameFalse = (function (potentialUserName) {
      this.setState({ usernameClean: potentialUserName });
      this.setState({ username: potentialUserName });
      this.setState({ usernameLoading: false });
      this.setState({ userNameVerified: false });
      number += 1;
      checkUser(`${input}-${number}`);
    }).bind(this);

    // check if exists already
    function checkUser(potentialUserName) {
      Meteor.call('users.checkUsername', { potentialUserName }, (error, count) => {
        if (error) {
          console.log(error.reason);
        } else {
          if (count > 0) {
            setUsernameFalse(potentialUserName);
            return false;
          }
          setUsernameTrue(potentialUserName);
          return true;
        }
      });
    }
    checkUser(input);
  }

  formValidate() {
    const input = {
      emailAddress: this.emailAddress.value,
      password: this.password.value,
      username: this.state.username,
    };

    const formErrors = customFormValidator(input, signupFormRules, signupErrorMessages);

    /*
    Check if formErrors is not false, username is verified and not loading.
    If empty and username is verified, submit form.
    */
    if (!formErrors &&
      this.state.userNameVerified === true &&
      this.state.usernameLoading === false) {
      this.handleSubmit();
    } else {
      this.setState({ formErrors });
    }
  }

  handleSubmit() {
    const { history } = this.props;

    const newAdmin = {
      email: this.emailAddress.value,
      password: this.password.value,
      username: this.state.username,
    };

    Meteor.call('users.createNewAdminUser', newAdmin, (error, res) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
        console.log(error);
      } else {
        Meteor.loginWithPassword(
          this.emailAddress.value,
          this.password.value,
          (loginError) => {
            if (loginError) {
              Bert.alert('Error Logging In', 'danger');
            } else {
              Meteor.call('users.sendVerificationEmail');
              Bert.alert('Welcome!', 'success');
              history.push(`/create-path`);
            }
          });
      }
    });
  }

  editUsername() {
    this.setState({ username: this.username.value });
    this.createUsername('username');
    this.setState({ usernameLoading: true });
    this.setState({ "formErrors.username": "" });
  }

  editUsernameWithOrgName() {
    this.createUsername('orgName');
    this.setState({ usernameLoading: true });
    this.setState({ "formErrors.username": "" });
  }

  signUpFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email'],
    }, (err) => {
      if (err) {
        console.log(err);
        // handle error
      } else {
        // console.log();
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
        // successful login!
      }
    });
  }

  render() {
    return (
      <Paper className="Signup">

        <h2>Create New Account</h2>

        <form onSubmit={event => event.preventDefault()}>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpFacebook}
          >
            <span style={{ color: 'white' }}>
              Facebook Sign Up
          </span>
          </Button>

          <Button
            type="submit"
            fullWidth
            onClick={this.signUpGoogle}
          >
            <span style={{ color: 'white' }}>Google Sign Up</span>
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
            id="orgID"
            label="Pick A Username"
            value={this.state.username}
            onChange={this.editUsername}
            inputRef={(input) => { this.username = input; }}
            error={!!this.state.formErrors.username}
            maxLength="22"
          />
          {
            (this.state.usernameLoading)
              ? <CircularProgress
                size={25}
                left={10}
                top={0}
                status="loading"
                style={{ display: 'inline-block', position: 'relative' }}
              />
              : ''
          }

          <TextField
            id="username"
            label="Email Address"
            inputRef={(input) => { this.emailAddress = input; }}
            error={!!this.state.formErrors.emailAddress}
          /><br />

          <TextField
            id="password"
            type="password"
            label="Password"
            inputRef={(password) => { this.password = password; }}
            error={!!this.state.formErrors.password}
          />

          <div>

            <Button
              type="submit"
              fullWidth
              onClick={this.formValidate}
              style={{ margin: "35px 0 35px 0" }}
            >
              Sign Up
        </Button>

          </div>

          <p>Already have an account? <Link to="/login">Log In</Link>.</p>

        </form>
      </Paper>);
  }
}

Signup.propTypes = {
  history: PropTypes.object.isRequired,
};
