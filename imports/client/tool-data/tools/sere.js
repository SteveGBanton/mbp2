import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/sere`,
  image: `${ASSET_FOLDER}/tools/secondary-research.png`,
  title: 'Secondary Research',
  preHeader: 'Tool',
  materials: [
    'board',
    'crafting',
    'deck',
    'stickies',
    'camera',
    'pencil',
    'whiteboard',
    'online',
  ],
  purpose: 'Market Research',
  description: 'Secondary Research can reveal market insights and potential challenges which will allow you to make informed decisions very quickly. It can also reveal opportunities for innovation.',
  beforeYouStart: 'You may have a new challenge such as creating a new marketing campaign, a new product or service, trying to serving a new market with an existing product etc. In any case, the first step is to do market research. An effective Secondary Research campaign can help you to make certain decisions quickly by relying on published secondary data such as statistics and aggregated data.',
  backgroundSize: '',
  backgroundPosition: '',
  time: '2-4 days',
  team: 'You, Team',
  steps: [
    {
      id: 'step1',
      content: 'Learn about the market environment. Start by finding the most recent news related to the product, problem or challenge. You and your team can use magazines, journal, newspapers, TV news, etc. (2-5 hours)',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Everyone should add their relevant findings to sticky notes, one finding per note.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: [
        {
          id: 'step31',
          content: 'Each member discusses findings with the group. Cover information in the following categories (use our board or the CANVAS MODEL):',
          type: 'text',
        },
        {
          id: 'step32',
          content: `
* Macro-environment:
  * Demographics factors
  * Economic factors
  * Social Cultural factors
  * Environment Factors 
  * Tech Factors
* Micro - enviroment:
  * Market size, trends, growth, ROI, Competition, etc
  * Customer needs, segmentation, patterns, motivations.
  * Suppliers
  * Competitors
  * Partners
* Internal
  * Sales
  * ROA
  * Brand awareness 
  * Culture and values
`,
          type: 'text',
        },
      ],
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Find recent innovation in the field and find experts and visionaries that are talking about it. What of the above categories do these recent innovations belong to? If you are focused on creating a marketing campaign, what recent campaigns have resonated with the market, and why? (2-3h) Add this information to different colour sticky notes and add them to the board.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'Take a look at the competition, at old solutions, and at other solutions in your area and around the world. Think about how they work, and how they cover each of the categories above. Which solutions failed? Why? If you are focused on creating a marketing campaign, what competition or old campaigns have resonated with the market, and why? (3 h) Add this information to different colour sticky notes and add them to the board.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Discuss the recent innovations, competitor solutions, and old solutions. Discuss interesting concepts, why they were created, why they worked or didn’t work, and highlight unique business advantages of each that create a better customer experience. (2h)',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: 'Using what you now know about the above categories, as well as past and present solutions / innovations, how would you improve on each of those products? Always keep the customer and current market conditions in mind. (1-2h)',
      type: 'mixed',
      stepNo: 7,
    },
    {
      id: 'step8',
      content: 'How would you create the perfect product for this market, or a segment of this market?',
      type: 'mixed',
      stepNo: 8,
    },
  ],
};
