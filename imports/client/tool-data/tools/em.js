import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/em`,
  title: 'Extremes and Mainstreams',
  description: 'When trying to create a solution for a broad market, it is important to understand unusual/extreme users in addition to your mainstream users. When you study extreme users, you will be exposed to use cases and problem solving opportunities you may never have thought about, and will also uncover important insights about your mainstream users by contrast. This tool provides a useful method to understand your extreme users and how they differ from the mainstream.',
  image: `${ASSET_FOLDER}/tools/extremes-and-mainstreams.png`,
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  preHeader: 'Tool',
  purpose: 'Concept Ideation',
  time: '30m to 2h',
  team: 'Team 2+',
  steps: [
    {
      id: 'geafeagv',
      content: [
        {
          id: 'shsrhs4646345ebrsb',
          content: 'Write down the different groups of people that use your product or service. Define extreme and mainstream audiences, and define their approximate size by percentage of your total users. Extreme users may be small groups who use your product or service in an unusual way, may be considered ‘power users’, or may otherwise have characteristics that are not part of your mainstream audience.',
          type: 'text',
        },
        {
          id: 'besesnes322h4wh4',
          content: `${ASSET_FOLDER}/tools/em-image1.png`,
          type: 'image',
        },
      ],
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'gearnrsnrs',
      content: `Next, define a [Persona](${WEBSITE_URL}/tool/pe)  for each of these audiences. If you are working in teams, you can divide the audiences between them.`,
      stepNo: 2,
    },
    {
      id: 'nsnrs3255',
      content: 'Start preliminary research by asking sales people, looking at statistics, etc., in order to begin to define your personas.',
      stepNo: 3,
    },
    {
      id: 'jdntd3255',
      content: 'When you have a basic definition for your extreme and mainstream users, the next step is to understand the difference between each audience as well as what they have in common. The best way to do this is through interviews. Prepare an interview or questionnaire for at least one user in each audience segment.',
      stepNo: 4,
    },
    {
      id: 'bsh43hsns',
      content: 'List each discrete audience observation on its own sticky note for use in the next step. Try to list 50 or more for each audience, and add a user number and observation number to each note to keep track of observation sources. eg. "User3 #5, likes the way tasks are organized in the system".',
      stepNo: 5,
    },
    {
      id: 'begbe35hs',
      content: 'When all interviews have been carried out, hold a meeting to discuss and analyze findings. Because the purpose of this meeting is essentially to organize information and to reveal important insights. This is usually only necessary if you have gathered a lot of data that is difficult to sift through. If not using an Affinity Diagram: use the meeting to define key differences and similarities between your extreme and mainstream audiences.',
      stepNo: 6,
    },
    {
      id: 'ksesb326',
      content: `These answers can be useful beyond your department. Make sure you think about how the answers might affect your organization in terms of marketing, sales, products, price points, advertising, work culture, interior design, communications, etc. You can also expand use of the data you’ve gathered by using discussion tools such as [Six Thinking Hats](${WEBSITE_URL}/tool/sth) to brainstorm new ideas and solve any problems you’ve uncovered.`,
      stepNo: 7,
    },
  ],
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
};

// [REF. Interview Tool] jdntd3255
// ...you may optionally use the [REF. Affinity Diagramming] tool to meaningfully cluster observations and show differences between groups (create columns for each audience segment) begbe35hs
