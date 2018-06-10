import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/rflw`,
  image: `${ASSET_FOLDER}/tools/resource-flow.png`,
  title: 'Resource Flow',
  preHeader: 'Tool',
  materials: [
    'camera',
    'pencil',
  ],
  purpose: 'Market Research',
  description: 'This method will help you understand how an audience uses their resources, and how their expenses affect their decisions and their lives.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '3-5 days',
  team: 'You and user(s)',
  steps: [
    {
      id: 'step1',
      content: 'Contact clients or people who represent your audience for interviews (use the [REF. Universe of Study] to establish your audience). Ask them to meet for 30-60 min to talk about the subject you are working on. This interview can be in groups or done individually. Make sure you are not talking about difficult or sensitive topics if you decide to do a group interview.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step3',
      content: 'To prepare for the interview, create a quick introduction to the topic, and create a list of questions you would like to ask. Keep in mind that the purpose of this tool is to understand how the customer uses their resources. It can be used with other tools at the same interview (such as Card Sort), but not necessarily. By the end of the interview, you want to understand their priorities and how money or time affects their decisions.',
      type: 'mixed',
      stepNo: 2,
    },
    {
      id: 'step4',
      content: 'At the interview, make sure you are recording, and give each interviewee a piece of paper and a pen. ',
      stepNo: 3,
    },
    {
      id: 'step5',
      content: 'Invite them to start by asking them to create a list of everything that brings money into their household/workplace, or saves them money or time. Give them 5-10 min to answer.',
      type: 'mixed',
      stepNo: 4,
    },
    {
      id: 'step6',
      content: 'Second, ask them to list or draw everything that takes money, time, or opportunity away.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step7',
      content: `
Dig deeper by asking questions like:

* What can’t you live without?
* What is the most expensive thing you use/own?
* What would you do if you had more money?
* What are you trying to save money for?
* What would you do if you had more time?
* What brings more opportunity?

(1-5 min per question)`,
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step8',
      content: 'Next ask them to add key expenses and income to a yearly calendar. That way you can understand when they have money, and when they are more strapped for cash, and will provide insight into how they will act based on these factors. (10 min)',
      type: 'mixed',
      stepNo: 7,
    },
    {
      id: 'step9',
      content: 'After you have gathered data from each participant, you may use the data in any of the following tools: Storyboards - to synthesize the data into single visual narratives that may translate into specific design alternatives. Six Thinking Hats - to brainstorm new ideas based on gathered data.',
      type: 'mixed',
      stepNo: 8,
    },
  ],
};
