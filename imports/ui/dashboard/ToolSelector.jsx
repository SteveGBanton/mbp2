import React from 'react';
import Grid from 'material-ui/Grid';

import MenuCard from './MenuCard';

const ToolSelectorComponent = ({
  history,
  designPhases,
  tools,
  match: { params: { phaseId, categoryId } },
}) => {
  const categories = phaseId && designPhases[phaseId] ? designPhases[phaseId].categories : {};
  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        container
        justify="center"
        style={{ maxWidth: 800, width: '95%' }}
      >
        {
          phaseId && categoryId &&
          designPhases[phaseId] &&
          categories[categoryId] ?
            categories[categoryId].tools.map(item => (
              <MenuCard
                cardData={tools[item]}
                key={item}
                history={history}
              />
            ))
            :
            phaseId &&
            designPhases[phaseId] ?
              Object.keys(categories).map(item => (
                <MenuCard
                  cardData={categories[item]}
                  key={item}
                  history={history}
                />
              ))
              :
              ''
        }
      </Grid>
    </Grid>
  )
};

ToolSelectorComponent.defaultProps = {
  match: {
    params: {},
  },
};

export default ToolSelectorComponent;
