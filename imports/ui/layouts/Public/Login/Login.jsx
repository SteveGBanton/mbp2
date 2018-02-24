import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import './Login.scss';

function signUpFacebook() {
  Meteor.loginWithFacebook({
    requestPermissions: ['public_profile', 'email'],
  }, (err) => {
    if (err) {
      Bert.alert('Sorry, something went wrong.', 'danger');
    } else {
      Bert.alert('Welcome back!', 'success');
    }
  });
}

function signUpGoogle() {
  Meteor.loginWithGoogle({
    requestPermissions: ['email'],
  }, (err) => {
    if (err) {
      Bert.alert('Sorry, something went wrong.', 'danger');
    } else {
      Bert.alert('Welcome back!', 'success');
    }
  });
}

const Login = () => (
  <div className="login">
    <Paper className="login-box">
      <h3 style={{ textAlign: 'center' }}>Sign In To Yago with Facebook or Google</h3>

      <form onSubmit={event => event.preventDefault()}>

        <RaisedButton
          type="submit"
          fullWidth
          onClick={signUpFacebook}
          style={{ margin: '10px 0 0 0' }}
          backgroundColor="#3b5998"
        >
          <span style={{ color: 'white' }}>
            Facebook Sign In
          </span>
        </RaisedButton>

        <RaisedButton
          type="submit"
          fullWidth
          onClick={signUpGoogle}
          style={{ margin: '10px 0 0 0' }}
          backgroundColor="#EA4335"
        >
          <span style={{ color: 'white' }}>Google Sign In</span>
        </RaisedButton>

      </form>


    </Paper>
  </div>
);

export default Login;
