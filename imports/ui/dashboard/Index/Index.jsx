import React from 'react';
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

export default IndexComponent;
