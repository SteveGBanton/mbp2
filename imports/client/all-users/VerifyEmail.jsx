import React from 'react';
import { shape } from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import { CircularProgress } from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { ASSET_FOLDER } from '../../startup/configuration';
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
          history.push('/tools');
        }, 4000);
      } else {
        setTimeout(() => {
          snackBarOpen('Successful verification, thanks!');
          history.push('/tools');
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
            <img
              width="140px"
              style={{
                display: 'block',
                paddingBottom: 30,
              }}
              src={`${ASSET_FOLDER}/logo-b.png`}
              alt="logo"
            />
            <CircularProgress thickness={8} style={{ margin: 20 }} />
            Verifying Email...
          </Grid>
          :
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img
              width="140px"
              style={{
                display: 'block',
                paddingBottom: 30,
              }}
              src={`${ASSET_FOLDER}/logo-b.png`}
              alt="logo"
            />
            Sorry - {this.state.error}
          </Grid>
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
