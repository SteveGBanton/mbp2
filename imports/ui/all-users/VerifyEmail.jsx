import React from 'react';
import { shape } from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import { snackBarOpen } from '../../modules/utility';

class VerifyEmail extends React.Component {
  state = {
    error: null,
  };

  componentDidMount() {
    const { match, history } = this.props;
    Accounts.verifyEmail(match.params.tokenId, (error) => {
      if (error) {
        this.setState({
          error: `${error.reason}. Please try again.`,
        });
        setTimeout(() => {
          history.push('/');
        }, 4000);
      } else {
        setTimeout(() => {
          snackBarOpen('Successful verification, thanks!');
          history.push('/dashboard');
        }, 1500);
      }
    });
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ width: '100vw', height: '100vh' }}
      >
        {!this.state.error ?
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <CircularProgress thickness={8} style={{ margin: 20 }} />
            Verifying Email...
          </Grid>
          :
          this.state.error
        }
      </Grid>
    );
  }
}

VerifyEmail.propTypes = {
  match: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default VerifyEmail;
