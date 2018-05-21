import React from 'react';
import { shape } from 'prop-types';
import Grid from '@material-ui/core/Grid';

import MenuCard from '../../shared/MenuCard';

const IndexComponent = ({ designPhases }) => (
  <Grid
    container
    justify="center"
  >
    <Grid
      container
      justify="center"
      style={{ maxWidth: 1200, width: '95%', padding: '50px 0 90px 0' }}
    >
      {Object.keys(designPhases).map(item => (
        <MenuCard
          cardData={designPhases[item]}
          key={item}
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
};

export default IndexComponent;
