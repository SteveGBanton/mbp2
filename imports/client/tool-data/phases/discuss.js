import { ASSET_FOLDER, TOOLS_BROWSE_FOLDER } from '../../../startup/configuration';

export default {
  id: 'card3',
  link: `${TOOLS_BROWSE_FOLDER}/discuss`,
  title: 'Discussion',
  image: `${ASSET_FOLDER}/discussion.png`,
  preHeader: 'Innovation Phase',
  categories: {
    new: {
      id: 'cat8',
      link: `${TOOLS_BROWSE_FOLDER}/discuss/new`,
      title: 'Find New Ideas And Opportunities',
      image: `${ASSET_FOLDER}/categories/find-opportunity.png`,
      preHeader: 'Tool Category',
      tools: [
        'act',
        'sth',
      ],
    },
    evaluate: {
      id: 'cat10',
      link: `${TOOLS_BROWSE_FOLDER}/discuss/evaluate`,
      image: `${ASSET_FOLDER}/categories/evaluate-ideas.png`,
      title: 'Evaluate Ideas & Reduce Risk',
      preHeader: 'Tool Category',
      tools: [
        'ev',
        'sth',
        'act',
      ],
    },
  },
};
