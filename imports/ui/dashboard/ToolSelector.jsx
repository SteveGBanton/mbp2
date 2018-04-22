import React from 'react';
import { shape } from 'prop-types';
import Grid from 'material-ui/Grid';

import MenuCard from './MenuCard';

const ToolSelectorComponent = ({
  history,
  designPhases,
  tools,
  match: { params: { phaseId, categoryId } },
}) => {
  const categories = phaseId && designPhases[phaseId] ? designPhases[phaseId].categories : {};
  const ifDesignPhases = designPhases[phaseId] ?
    Object.keys(categories).map(item => (
      <MenuCard
        cardData={categories[item]}
        key={item}
        history={history}
      />
    ))
    :
    '';
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
          phaseId &&
          categoryId &&
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
            phaseId && ifDesignPhases
        }
      </Grid>
    </Grid>
  );
};

ToolSelectorComponent.defaultProps = {
  match: {
    params: {},
  },
};

ToolSelectorComponent.propTypes = {
  match: shape({
    params: shape({}),
  }),
  history: shape({}).isRequired,
  designPhases: shape({}).isRequired,
  tools: shape({}).isRequired,
};

export default ToolSelectorComponent;
