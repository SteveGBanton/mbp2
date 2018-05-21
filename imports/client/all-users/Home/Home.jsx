import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MenuCard from '../../shared/MenuCard';
import styles from './Home.styles';
import DescriptionCard from './DescriptionCard';
import { ASSET_FOLDER } from '../../../startup/configuration';

const Home = ({ classes, designPhases, history }) => (
  <Grid className={classes.root}>
    <Grid className={classes.splash} container justify="center" alignItems="center">
      <Grid className={classes.splashImage} container justify="center" alignItems="center">
        <img src={`${ASSET_FOLDER}/bk.png`} alt="" />
      </Grid>
      <Grid className={classes.intro}>
        <div className={classes.textHeader}>Tools to Spark Innovation</div>
        <div className={classes.textHeaderDescription}>
          Welcome to Nova, the design thinking tool library.
        </div>
        <div className={classes.textHeaderDescription}>
          Click to sign in and start solving problems:
        </div>
        <Button
          variant="raised"
          className={classes.buttonLogin}
          onClick={() => history.push('/tools')}
        >
          Start Using The Tools
        </Button>
      </Grid>
    </Grid>
    <Grid
      container
      justify="center"
      className={classes.start}
    >
      <Grid
        container
        justify="center"
        style={{ maxWidth: 1200, width: '95%', padding: '50px 0 90px 0' }}
      >
        <DescriptionCard
          cardData={{
            title: 'Choose Your Innovation Phase',
            description: 'To start using our innovation tools, simply select the current innovation phase you are in:',
            preHeader: 'Choose Phase',
          }}
        />
        {Object.keys(designPhases).map(item => (
          <MenuCard
            cardData={designPhases[item]}
            key={item}
          />
        ))}
      </Grid>
    </Grid>
    <Grid className={classes.about} />
  </Grid>
);

Home.propTypes = {
  classes: shape({}).isRequired,
  designPhases: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
