import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { ASSET_FOLDER } from '../../../startup/configuration';
import { snackBarOpen } from '../../../modules/utility';

import styles from './ResetPassword.styles';

import fzValidator from '../../../modules/fzValidator';

const signupFormRules = {
  password: {
    required: true,
    password: true,
    maxLength: 30,
  },
  verifyPassword: {
    required: true,
    password: true,
    maxLength: 30,
  },
};

const signupErrorMessages = {
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

export class ForgotPasswordC extends React.Component {
  state = ({
    formErrors: {},
    password: '',
    verifyPassword: '',
  });

  formValidate = () => {
    const { password, verifyPassword } = this.state;

    const input = {
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
        password,
      });
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = ({ password }) => {
    const { match, history } = this.props;
    const { token } = match.params;

    Accounts.resetPassword(token, password, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        snackBarOpen('Password reset successful!');
        history.push('/profile');
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
              <div className={classes.headlineText}>Reset Password Form</div>
              To reset your password, enter a new one below!
              <Grid item style={{ width: '100%', height: 5, margin: 25 }}>
                <Divider light style={{ color: '#000' }} />
              </Grid>
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
                Enter
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

ForgotPasswordC.propTypes = {
  history: shape({}).isRequired,
  classes: shape({}).isRequired,
  match: shape({}).isRequired,
};

export default withStyles(styles)(ForgotPasswordC);
