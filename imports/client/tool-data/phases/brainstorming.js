import { ASSET_FOLDER, TOOLS_BROWSE_FOLDER } from '../../../startup/configuration';

export default {
  id: 'card2',
  link: `${TOOLS_BROWSE_FOLDER}/brainstorming`,
  title: 'Brainstorming',
  image: `${ASSET_FOLDER}/brainstorming.png`,
  preHeader: 'Innovation Phase',
  categories: {
    ideation: {
      id: 'cat6',
      link: `${TOOLS_BROWSE_FOLDER}/brainstorming/ideation`,
      image: `${ASSET_FOLDER}/categories/start-ideation.png`,
      title: 'Start the Ideation Process',
      preHeader: 'Tool Category',
      tools: [
        'cra',
        'bci',
      ],
    },
    develop: {
      id: 'cat7',
      link: `${TOOLS_BROWSE_FOLDER}/brainstorming/develop`,
      image: `${ASSET_FOLDER}/categories/developing-ideas.png`,
      title: 'Develop Ideas',
      preHeader: 'Tool Category',
      tools: [
        'mac',
      ],
    },
  },
};
