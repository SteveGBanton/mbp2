import React from 'react';
import { shape } from 'prop-types';
import Grid from 'material-ui/Grid';

import MenuCard from '../shared/MenuCard';

const ToolSelectorComponent = ({
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
        style={{
          maxWidth: 1200,
          width: '95%',
          padding: '50px 0 90px 0',
          userSelect: 'none',
        }}
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
  designPhases: shape({}).isRequired,
  tools: shape({}).isRequired,
};

export default ToolSelectorComponent;
