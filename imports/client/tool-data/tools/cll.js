import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/cll`,
  image: `${ASSET_FOLDER}/tools/collage.png`,
  title: 'Collage',
  preHeader: 'Tool',
  materials: [
    'crafting',
    'deck',
    'stickies',
    'camera',
    'pencil',
    'online',
  ],
  purpose: 'Market Research',
  description: 'Use this tool to understand an audience\'s values, behaviours, opinions, and processes.A collection of collages and descriptions from their creators will give you a visual idea of how your audience sees their world or how they see a topic.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '3-5 days',
  team: 'You, user(s)',
  steps: [
    {
      id: 'step1',
      content: 'Invite members of your audience to a group interview where they will be creating a small collage.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Prepare an introduction to the topic and prepare collage supplies at each table. Make sure you offer drinks and snacks.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: 'Ask them to make a collage that represents “X”. For example, ask them to make a collage that represents what they think about schools, or what they look for in a dream job, or what they think about household cleaning, etc (10-20 min)',
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'When they finish, have a team member sit down with them individually and ask them to talk about their collage. Start by asking an open question about what they are trying to express through the collage in general. Then go on to ask more specific questions about design or colours they used, or why they chose certain imagery.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'Take a picture of each collage and keep notes from their description of their work. Allow them to take the collage home if they like.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'After you have completed the group interview and gathered notes, go on to use a Discussion Tool or Organization Tool to synthesize and draw insights from the data. [ADD MORE]',
      type: 'mixed',
      stepNo: 6,
    },
  ],
};
