import { ASSET_FOLDER, TOOLS_BROWSE_FOLDER } from '../../../startup/configuration';

export default {
  id: 'card4',
  link: `${TOOLS_BROWSE_FOLDER}/project`,
  title: 'Project Planning',
  image: `${ASSET_FOLDER}/project-management.png`,
  preHeader: 'Innovation Phase',
  categories: {
    identify: {
      id: 'cat11',
      link: `${TOOLS_BROWSE_FOLDER}/project/identify`,
      image: `${ASSET_FOLDER}/categories/reduce-risk.png`,
      title: 'Identify Project Problems/Risks',
      preHeader: 'Tool Category',
      tools: [
        'ev',
      ],
    },
    prioritization: {
      id: 'cat12',
      link: `${TOOLS_BROWSE_FOLDER}/project/prioritization`,
      image: `${ASSET_FOLDER}/categories/prioritization.png`,
      title: 'Prioritization',
      preHeader: 'Tool Category',
      tools: [
        'kano',
      ],
    },
  },
};
