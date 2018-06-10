import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/kano`,
  image: `${ASSET_FOLDER}/tools/kano-board.png`,
  title: 'KANO Analysis',
  preHeader: 'Tool',
  materials: [
    'stickies',
    'pencil',
    'whiteboard',
  ],
  purpose: 'Prioritization',
  description: 'Kano analysis is a customer satisfaction model that can be used to prioritize the implementation of key product features (once they have already been defined). It can also be used to determine the priority of marketing projects (eg. should we prioritize the product packaging product, or the new online customer portal) as they relate to the value provided to the customer. Ideally, you should prioritize projects that provide more value to your customer. Kano classifies customer preferences into five categories as they are perceived by the customer, so you can understand which product features or ideas you or your team should pursue first. It was developed in the 1980s by Professor Noriaki Kano, a quality management educator.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '1-3h',
  team: 'You, team 2+',
  steps: [
    {
      id: 'step1',
      content: 'If you are planning to use a team for the analysis, plan a time to meet. Kano analysis can be done by a team or by a single person.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'If you are working with a team explain that the purpose of the meeting is to figure out which upcoming product features or ideas will provide the most value to your customers, and to prioritize them while keeping the current goals of your organization in mind.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: [
        {
          id: 'step301',
          content: 'Use the Kano analysis tool of the Nova board or draw two axes on a whiteboard or piece of paper as below. Label each of the four boxes accordingly. They each refer to one category in the Kano analysis.',
          type: 'text',
        },
        {
          id: 'step302',
          content: `${ASSET_FOLDER}/tools/kano/kano-step3.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      stepNo: 3,
    },
    {
      id: 'step4',
      content: [
        {
          id: 'step401',
          content: `Discuss each feature/idea with your team and assign each to one of the four boxes using sticky notes. Each will fall under one of the four qualities: Must-be, One-dimensional, Attractive and Indifferent, according to whether each feature is positive, neutral or negative if it is implemented or not. Where an feature/idea will be located on the graph depends on current customer expectations and on the performance of competing products in the marketplace.
* If a feature has the Must - be quality, including it will be neutral because the customer currently expects it and competing products include it, while excluding it will be negative for the same reasons.
* If a feature has the One - dimensional quality, including it will be positive because not all products in the marketplace may feature it, but will be negative if not included because other products may be more attractive. This is the quality on which most companies compete.
* If a feature has the Attractive quality, including it will be positive because it is an unexpected bonus, and not including it will be neutral because the customer does not expect it.
* If a feature has the Indifferent quality, including it will be neutral because the customer does not care about it, and excluding it will also be neutral for the same reason.`,
          type: 'text',
        },
        {
          id: 'step402',
          content: `${ASSET_FOLDER}/tools/kano/kano-step4.png`,
          maxHeight: 800,
          type: 'image',
        },
        {
          id: 'step403',
          content: 'Note that because the analysis depends on the state of current customer expectations the graph may change over time ie.current Attractive qualities may become Must-be qualities after other companies implement the feature and customers begin to expect it.',
          type: 'text',
        },
        {
          id: 'step404',
          content: `${ASSET_FOLDER}/tools/kano/kano-step4-under.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      stepNo: 4,
    },
    {
      id: 'step5',
      content: [
        {
          id: 'step501',
          content: `Next, make a list of all the features which may in some cases be Reverse quality.
      
A feature/idea with the Reverse quality is a quality which is a Must-be, Attractive, One-dimensional or Indifferent feature for some customers, but is an anti-feature for others. For example, a handheld device with highly complex controls may be desired by some customers, but the complexity may be an anti-feature to others.

Make a table with the feature name in the first column and the case in which it has Reverse quality in the second column. Add another label or an asterisk to any sticky notes that may have Reverse quality in some cases.`,
          type: 'text',
        },
        {
          id: 'step502',
          content: `${ASSET_FOLDER}/tools/kano/kano-step5.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: [
        {
          id: 'step501',
          content: 'Analyze the board. Sticky notes may move during the discussion until everyone agrees on their location. This is also a good opportunity to modify features, split large features into multiple features (one which may be a Must-be and another part of the original feature which is really just an Attractive, for example), and to add new features. Discuss the changes. Decide on priority based on your analysis. Typically, Must-be features/ideas should be prioritized first, One-dimensional next, then Attractive, and Indifferent quality can be put on the backburner or skipped altogether.',
          type: 'text',
        },
        {
          id: 'step502',
          content: `${ASSET_FOLDER}/tools/kano/kano-step6.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: [
        {
          id: 'step701',
          content: 'To review the options and discuss further the team can use tools like: [REF. SIX THINKING HATS] for discussion or [REF. ROLES] or other task for Project Management. ',
          type: 'text',
        },
      ],
      type: 'mixed',
      stepNo: 7,
    },
  ],
};
