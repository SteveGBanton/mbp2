import { ASSET_FOLDER, TOOLS_BROWSE_FOLDER } from '../../../startup/configuration';

export default {
  id: 'card5',
  link: `${TOOLS_BROWSE_FOLDER}/team`,
  title: 'Team Building',
  image: `${ASSET_FOLDER}/team-building.png`,
  preHeader: 'Innovation Phase',
  categories: {
    teamwork: {
      id: 'cat13',
      link: `${TOOLS_BROWSE_FOLDER}/team/teamwork`,
      image: `${ASSET_FOLDER}/categories/reinforce-teamwork.png`,
      title: 'Reinforce Teamwork',
      preHeader: 'Tool Category',
      tools: [
        'cnnb',
      ],
    },
    culture: {
      id: 'cat14',
      link: `${TOOLS_BROWSE_FOLDER}/team/culture`,
      image: `${ASSET_FOLDER}/categories/team-culture.png`,
      title: 'Create Team Culture',
      preHeader: 'Tool Category',
      tools: [
        'tmb',
      ],
    },
  },
};
