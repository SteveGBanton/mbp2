import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/dirh`,
  image: `${ASSET_FOLDER}/tools/dialogue-research.png`,
  title: 'Dialogue Research',
  preHeader: 'Tool',
  materials: [
    'pencil',
  ],
  purpose: 'Market Research',
  description: 'Technique to put a bunch of ideas in front of a person and get them to talk about their experiences and beliefs. This method is ideal to start a productive & valuable conversation about a topic.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '60m - 5 days',
  team: 'You',
  steps: [
    {
      id: 'diahgeafeae',
      content: `Determine who you want to talk to, and what you want them to talk about. Use the [Universe Of Study](${WEBSITE_URL}/tool/unst) technique first, if you have not yet defined the group you will be studying.`,
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'diahga44hah4a',
      content: 'Write down the goal of the research study. What do you want to find out about?',
      type: 'mixed',
      stepNo: 2,
    },
    {
      id: 'diahah4sns',
      content: 'Write down one or more hypotheses about how you think people will answer.',
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'diahgeabeane',
      content: `
Now list as many interesting options as you can to start a conversation.For example, if you wanted to start a conversation about how people shop for shoes:

* If you had a lot of money how would you shop for shoes ?
* If you could choose any store to go to for shoes, which one would it be?
* If you could only choose to own one pair of shoes, which would it be ?
* How many pairs of shoes do you own?

If you want deeper answer make you sure you have open follow-up questions like:

* What is the reason behind that?
* What’s the purpose of that?
* How do you feel about doing that ?
* What would you change about X?
      `,
      type: 'mixed',
      stepNo: 4,
    },
    {
      id: 'diahgeageahefeae',
      content: 'Take notes or record the conversation. Be open to listen to however the interviewee interprets the concept / project / problem, especially if the answer is different than what you were expecting.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'diahgeaf363eae',
      content: 'Analyze the information and look for interesting concepts you didn’t know. Also check your hypotheses and compare them with your findings.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'diahgeaf272heae',
      content: 'To make sure you use these findings, create a solution / idea for each finding. Use the following sentence: My customer thinks / sees / is afraid of / needs `_____` so I think `_____` will make my solution a more specific fit to their needs / beliefs.',
      type: 'mixed',
      stepNo: 7,
    },
  ],
};
