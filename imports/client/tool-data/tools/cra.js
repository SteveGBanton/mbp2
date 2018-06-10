import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/cra`,
  image: `${ASSET_FOLDER}/tools/wild-associations.png`,
  title: 'Wild Associations',
  preHeader: 'Tool',
  materials: [
    'deck',
    'pencil',
    'whiteboard',
  ],
  purpose: 'Ideation',
  description: 'Use Wild Association to create new ideas and concepts. You can create new ideas related to a specific problem, or set a different scope for generating ideas.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '30m',
  team: 'You, Team',
  steps: [
    {
      id: 'step1',
      content: 'Use the Wild Association cards that come with Nova or create your own cards (minimum 60 to 100 cards, each one one word, picture or concept).',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'You can use this tool with a team or by yourself. If you are using this tool with your team, invite your team to a meeting and tell them about the topic you want to discuss eg. product design, usability of a website, the brand etc. Define the problem and the objective of the meeting.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: 'Take either 1 or 2 cards at a time from the deck of cards and place them face up on the table. With your team, find creative ways to connect the problem to the concepts on the cards.',
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Everyone has 2-5 min to write down or draw all the ideas they can think about. Encourage the team to come up with as many ideas as possible.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'Have each team member share ideas with the rest of the team.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Have a discussion and vote for the best ideas. Keep the most viable ideas in the middle of the table or add them on your board.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: 'Repeat this procedure for 10-30 min.',
      type: 'mixed',
      stepNo: 7,
    },
    {
      id: 'step8',
      content: 'Discuss all the possible solutions. Do any solutions make sense? Make sure you eliminate the ones that don’t make sense. If you didn’t come up with any viable ideas, allow your team to sleep on the ideas in this session and try again the next day.',
      type: 'mixed',
      stepNo: 8,
    },
  ],
};
