import React from 'react';
import { shape } from 'prop-types';
import Grid from 'material-ui/Grid';

import MenuCard from '../MenuCard';

const IndexComponent = ({ designPhases, history }) => (
  <Grid
    container
    justify="center"
  >
    <Grid
      container
      justify="center"
      style={{ maxWidth: 800, width: '95%' }}
    >
      {Object.keys(designPhases).map(item => (
        <MenuCard
          cardData={designPhases[item]}
          key={item}
          history={history}
        />
      ))}
    </Grid>
  </Grid>
);

IndexComponent.defaultProps = {
  designPhases: {},
};

IndexComponent.propTypes = {
  designPhases: shape({}),
  history: shape({}).isRequired,
};

export default IndexComponent;
