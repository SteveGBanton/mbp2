import { ASSET_FOLDER, TOOLS_BROWSE_FOLDER } from '../../../startup/configuration';

export default {
  id: 'card1',
  link: `${TOOLS_BROWSE_FOLDER}/market`,
  title: 'Identify Market Problems',
  image: `${ASSET_FOLDER}/market.png`,
  backgroundSize: '90px 175px',
  backgroundPosition: 'right top',
  preHeader: 'Innovation Phase',
  categories: {
    define: {
      id: 'cat1',
      link: `${TOOLS_BROWSE_FOLDER}/market/define`,
      image: `${ASSET_FOLDER}/categories/define-market.png`,
      title: 'Define Your Market',
      preHeader: 'Tool Category',
      tools: [
        'em',
        'unst',
      ],
    },
    analyze: {
      id: 'cat2',
      link: `${TOOLS_BROWSE_FOLDER}/market/analyze`,
      image: `${ASSET_FOLDER}/categories/analyze-problems.png`,
      title: 'Analyze Problems',
      preHeader: 'Tool Category',
      tools: [
        'rsc',
        'rflw',
        'csrt',
      ],
    },
    psych: {
      id: 'cat3',
      link: `${TOOLS_BROWSE_FOLDER}/market/psych`,
      title: 'Understand User Psychology',
      image: `${ASSET_FOLDER}/categories/understand-user-psychology.png`,
      preHeader: 'Tool Category',
      tools: [
        'dirh',
        'rflw',
        'csrt',
        'cll',
        'pe',
      ],
    },
    feedback: {
      id: 'cat4',
      link: `${TOOLS_BROWSE_FOLDER}/market/feedback`,
      image: `${ASSET_FOLDER}/categories/get-feedback.png`,
      title: 'Get Feedback & Opinions',
      preHeader: 'Tool Category',
      tools: [
        'dirh',
        'csrt',
      ],
    },
    env: {
      id: 'cat5',
      link: `${TOOLS_BROWSE_FOLDER}/market/env`,
      image: `${ASSET_FOLDER}/categories/define-market.png`,
      title: 'Define Your Market Environment',
      preHeader: 'Tool Category',
      tools: [
        'sere',
      ],
    },
  },
};
