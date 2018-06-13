import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/csrt`,
  image: `${ASSET_FOLDER}/tools/card-sort.png`,
  title: 'Card Sort',
  preHeader: 'Tool',
  materials: [
    'deck',
    'camera',
  ],
  purpose: 'Interview Tool',
  description: 'Card Sort is an easy way to start a conversation during an interview and to get a clear idea of what the customer thinks, their values, etc. This method helps you identify what is most important to the people you are talking to.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '3-5 days',
  team: 'You, user(s)',
  steps: [
    {
      id: 'step1',
      content: 'Before the interview round, prepare your cards. Select all key areas you want to talk about and create a card for each with pictures and words. For example, imagine you are developing a new cleaning product. Your cards might be pictures of cleaning tools, they may depict cleaning actions, they may contain common phrases used in the cleaning industry etc.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Make sure your cards are easy to understand and make sure to use pictures when you are talking to people from different cultures/countries. Make sure the cards represent all topics you want to talk about, such as the purchasing process, disposal process etc. For example, if you want to learn about how people clean their houses, cards may include pictures of cleaning products, a dishwasher, a mop, or a family cleaning together.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: `Put together small group interviews or one-on-one interviews. You may provide incentive to take part in interviews such as a gift card or membership. Use the [Universe of Study](${WEBSITE_URL}/tool/unst) tool to make sure you have an optimal sample size.`,
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Prepare for the interview. Prepare the interview space with a camera, audio recording equipment, cards you plan to use, blank cards, pens and paper notebooks, the questionnaire you plan on using, and any other equipment you’ll need for the interview.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: `
Start the interview. Make sure you are filming or recording and your tell the participants the purpose of the research. 

When the Card Sort portion of the interview begins, give them the cards you have created, and ask them to arrange the cards or choose specific cards according to a specific factor you may be looking for. 

For example, you can ask them to arrange the cards by:
- what is most important to them
- what is harder for them
- which cards they like the most
- a timeline / storyline
- what cards they would choose based on a scenario

If you think there is a specific factor that would change the behaviour of your customers, ask them to rearrange the deck or choose other cards by changing a factor. For example, ask them how they would sort the cards if they had more money or if they were older, or if they had kids, etc.

When asking an interviewee about a timeline or story, make sure to provide blank cards so that the interviewee can add portions of the story that may be missing from your card deck. This may reveal critical behavior you have not anticipated.`,
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Observe their behavior closely and ask questions if you notice an unexpected reaction.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step7',
      content: 'Invite them to openly talk about the topic and their experiences before they go. Be prepared to get the most data possible from each participant.',
      type: 'mixed',
      stepNo: 7,
    },
    {
      id: 'step8',
      content: `
After you have gathered data from each participant, you may use [Six Thinking Hats](${WEBSITE_URL}/tool/sth) to brainstorm new ideas based on gathered data.`,
      type: 'mixed',
      stepNo: 8,
    },
  ],
};

// ADD REF [Storyboards](${WEBSITE_URL}/tool/discuss) - to synthesize the data into single visual narratives that may translate into specific design alternatives.
