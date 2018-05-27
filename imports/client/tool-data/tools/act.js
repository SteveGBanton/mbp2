import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/act`,
  image: `${ASSET_FOLDER}/tools/roles.png`,
  // TODO: image for roles
  title: 'Roles',
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
  purpose: 'Discussion',
  description: 'To enhance discussion, allowing your team to share ideas more effectively and find solutions faster. This is especially effective for discussions about marketing and product development because it provides a structured system to inject multiple perspectives into a discussion that may otherwise be overlooked eg. To include a perspective about customer behaviour or a perspective about how society affects customer decisions.',
  beforeYouStart: 'This can be use in meetings or while working on a project to make sure everyone on the team is objective and brings strategic points of view to the discussion. Before the meeting/project starts, the manager or innovation lead should give each team member an actor card. That card represents a specific role, and each team member needs to play that role. This doesn\'t mean that they can’t share their own opinion, it just means that they also need to think about ideas from the point of view of their new role.Roles may represent things, people or feelings.',
  backgroundSize: '',
  backgroundPosition: '',
  time: '1h - 7 days',
  team: 'You, team 2+',
  // TODO add steps
  steps: [
    {
      id: 'step1',
      content: '',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: '',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: '',
      type: 'mixed',
      stepNo: 3,
    },
  ],
};
