import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/cnnb`,
  image: `${ASSET_FOLDER}/tools/cannibal.png`,
  title: 'Cannibal',
  preHeader: 'Tool',
  materials: [
    'deck',
  ],
  purpose: 'Team Building',
  description: 'Evaluate the discussion ability of a team and create a safe atmosphere where the team can discuss and share their thoughts openly.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '30-60m',
  team: 'Team 5+',
  steps: [
    {
      id: 'step1',
      content: 'Split the group of people who are participating in the game into teams of 5-8 people.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: `Hand each team member a character card, as below. There can be no duplicate characters on each team, and at least one person must be the Interpreter.

Character cards:

1. Obese doctor
2. Young athlete
3. Prostitute who knows how to hunt
4. Old man who knows the area
5. Blind locksmith
6. Sick biologist
7. Philanthropist who is deaf
8. Interpreter who knows the language of the tribe`,
      stepNo: 2,
    },
    {
      id: 'step3',
      content: `Tell the team that the exercise will take about 10-30 minutes, and explain the following scenario:
      
Each team is a group of tourists traveling in the jungle with a tour guide. During their tour, they are captured by a tribe of cannibals. The cannibals have eaten the guide and locked up the tourists. Since the cannibals filled up on the guide, they have one week until they take their next victim. 

The tourists will need to choose who will be eaten next, and will need to choose who will be eaten each week afterward. When a character is eaten, he or she can no longer be part of the discussion, but can stay and listen. The interpreter needs to negotiate with the cannibals, so he or she always makes the decision of who will be eaten (with input from the team). If the interpreter is eaten, the leader of the exercise will choose who will be eaten next.`,
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Starting with the first week, the leader will give the team 2 minutes to decide how they want to proceed. If the team doesn’t decide who will be eaten, the leader will decide who the cannibals eat. ',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: "On the third week the leader will ask them if they made a plan to survive. The leader should ask questions like: 'How will you escape the cage', 'How will you get away from the tribe unnoticed', 'How will you find your way back to civilization?'",
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'The leader and other teams present will listen to their escape plan and should choose if they will survive or not. If the leader and other teams decide the plan will not work the Cannibals will eat 2 people rather than 1.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: 'Each team can make another attempt at escape until they are successful or they are eaten.',
      type: 'mixed',
      stepNo: 7,
    },
  ],
};
