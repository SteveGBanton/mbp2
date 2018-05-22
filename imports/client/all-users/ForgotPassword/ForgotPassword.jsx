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

import styles from './ForgotPassword.styles';

import fzValidator from '../../../modules/fzValidator';

const signupFormRules = {
  email: {
    required: true,
    maxLength: 50,
    email: true,
  },
};

const signupErrorMessages = {
  email: {
    required: 'This field is required',
    email: 'Please enter a valid email',
    maxLength: 'Email field is too long!',
  },
};

export class ForgotPasswordC extends React.Component {
  state = ({
    formErrors: {},
    email: '',
  });

  formValidate = () => {
    const { email } = this.state;

    const input = {
      email,
    };

    const formErrors = fzValidator(input, signupFormRules, signupErrorMessages);
    if (!formErrors) {
      this.handleSubmit({
        email,
      });
    } else {
      this.setState({ formErrors });
    }
  };

  handleSubmit = ({ email }) => {
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        snackBarOpen(error.reason);
      } else {
        snackBarOpen(`Check ${email} for a reset link!`);
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
              <div className={classes.headlineText}>Forgot Password Form</div>
              Enter your email address below to receive a link to reset your password.
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
              <Button className={classes.signup} onClick={this.formValidate}>
                Enter
              </Button>
            </Grid>
          </form>
        </Paper>
        <p>Remember your password? <Link to="/login">Log In</Link>.</p>
      </Grid>
    );
  }
}

ForgotPasswordC.propTypes = {
  classes: shape({}).isRequired,
};

export default withStyles(styles)(ForgotPasswordC);
