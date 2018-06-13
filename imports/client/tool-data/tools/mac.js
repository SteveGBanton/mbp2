import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/mac`,
  image: `${ASSET_FOLDER}/tools/challenges.png`,
  title: 'Challenges',
  preHeader: 'Tool',
  materials: [
    'crafting',
    'deck',
    'pencil',
  ],
  purpose: 'Market Research',
  description: 'Use this tool to find business solutions using lateral thinking.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '1-6h',
  team: 'You, team',
  steps: [
    {
      id: 'step1',
      content: 'Ideally use the Challenge tool with teams of 2 to 5 people, but can also be used without a team present by iterating through challenge cards.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Introduce a topic or problem that you wish to solve and make sure it is clear to everyone present.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: 'Give each team one challenge card.',
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Set a timer for 10 minutes and ask each team to think about a solution to the challenge presented on their card. Each challenge card requests that teams think in a particular way about the problem. (10 min)',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'When time is up or all teams have come up with solutions, invite each group to present their best idea to the rest of the team. (3-10min)',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Invite the entire group to ask questions and give suggestions to each solution.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: 'Invite everybody to vote on one of the solutions presented. If more than one solution is popular, potentially try to integrate it as well or save it for development at another time. (1-2min)',
      type: 'mixed',
      stepNo: 7,
    },
    {
      id: 'step8',
      content: `Once a solution has been selected, each team separates again to develop the idea. Other tools can be used at this stage such as [Kano Analysis](${WEBSITE_URL}/tool/sth) or [Six Thinking Hats](${WEBSITE_URL}/tool/sth), or another Challenge card can be presented. (10-15 min)`,
      type: 'mixed',
      stepNo: 8,
    },
    {
      id: 'step9',
      content: 'Repeat the sharing/question round, and vote on solutions once again. (3-8 min each)',
      type: 'mixed',
      stepNo: 9,
    },
    {
      id: 'step10',
      content: 'Iterate on the idea by repeating the previous steps until you run out of time.',
      type: 'mixed',
      stepNo: 10,
    },
  ],
};
