import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/pe`,
  image: `${ASSET_FOLDER}/tools/personas.png`,
  title: 'Personas',
  preHeader: 'Tool',
  materials: [
    'pencil',
    'online',
  ],
  purpose: 'Market Research',
  description: 'This method is ideal to understand user needs on a deep level. You will create a useful persona that will help you to develop products and solutions tailored to a specific audience.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '4h to 3 days',
  team: 'You or team',
  steps: [
    {
      id: 'perstag',
      content: 'Choose a specific audience to create a persona about. Make sure it is well defined and represents a certain segment of your market based on real data you have gathered.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'perstgegag',
      content: 'Start by finding information online (the easiest way to gather data quickly). Define a number of places where you customers may hang out online, and make sure your team searches for recent data. Suggestions for where to search: Forums, Facebook groups, blog comments, Google reviews, Amazon reviews are often excellent places to observe the way your customers really feel. Place special emphasis on posts where customers define their fears, needs, habits, and personal dreams. Divide your team up and have them each search a different Internet location.',
      type: 'text',
      stepNo: 2,
    },
    {
      id: 'perst1516326',
      content: 'Have each team member share their findings with the rest of the team. As they discuss, assign somebody to take down individual customer ‘attributes’ onto sticky notes, one attribute per sticky note. Add these sticky notes to a Persona board.',
      type: 'text',
      stepNo: 3,
    },
    {
      id: 'perst5326gsh',
      content: 'You will know when you have enough information when you feel like you know about this person and their beliefs, passions, aspirations, fears, hobbies, etc. Please continue finding information until you feel like the personality of your persona is fully-formed and could be real.',
      type: 'text',
      stepNo: 4,
    },
    {
      id: 'perstge4wfage5',
      content: 'Choose a real name for each customer or use the most common name that comes up in your customer files. This will help your team to have empathy for the customer as if it were a real person.',
      type: 'text',
      stepNo: 5,
    },
    {
      id: 'persth4wuwj5',
      content: 'Next, choose a stock photo for your Persona and have each team member create a short narrative about their life and situation. If you have interviewed customers for this Persona, it is ideal to use a life story that is a composite of those of your real customers.',
      type: 'text',
      stepNo: 6,
    },
    {
      id: 'perst32h4h4',
      content: 'Have each team member share their short narratives. When somebody gives a detail that everybody on the team agrees with and is highly relevant, add it to the board on a sticky note. Create a composite of these most resonant details.',
      type: 'text',
      stepNo: 7,
    },
    {
      id: 'persth4wh4w',
      content: 'By now the board should be complete. You and your team should know how your customer looks, what they say, what they think, how they feel. If the picture is not yet clear, go back to step 2 or 3 and add more details to complete the board.',
      type: 'text',
      stepNo: 8,
    },
    {
      id: 'perstg4sh4',
      content: 'Review the board with the rest of the team and highlight most important points.',
      type: 'text',
      stepNo: 9,
    },
    {
      id: 'perstt33whw',
      content: 'Make sure you and your team use this collage as a reference point for each project you start, for all advertising, and for any changes you may make in you project.',
      type: 'text',
      stepNo: 10,
    },
    {
      id: 'step11',
      content: `Now that you have an accurate Persona, there are many other tools you will be able to use. For example, you can also use the [Roles](${WEBSITE_URL}/tool/act) to understand more about this customer, and to test ideas or prototypes.`,
      type: 'text',
      stepNo: 11,
    },
  ],
};

// step11 or the [REF. Empathy Board]
