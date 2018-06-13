import { ASSET_FOLDER, WEBSITE_URL } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/unst`,
  image: `${ASSET_FOLDER}/tools/universe-of-study.png`,
  title: 'Universe of Study',
  purpose: 'Market Research',
  description: 'Define the group of people who will be the focus of a market research study.',
  beforeYouStart: 'Before you start testing your products in the marketplace, it’s important to define the group of people you are designing for, as well as the group of people you will use to test it. You will also make sure you have the right number of people to represent your customer base, so your results have a better chance of being statistically significant.',
  backgroundSize: '',
  backgroundPosition: '',
  time: '60-90m',
  team: 'You or team',
  preHeader: 'Tool',
  materials: [
    'pencil',
  ],
  steps: [
    {
      id: 'unstaea4bea',
      content: 'Start by defining who you want to talk to and those groups you want to study. For example: ‘Canadian women and men from 20 to 50 who may or may not drink beer’. The definition should be specific. You may consider things like: age, gender, ethnicity, class, social status, geography, beliefs, habits, etc. The more specific the better.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'unstafeag2eage',
      content: [
        {
          id: 'unstgeafeageafea2',
          content: 'Next, split your target into groups, and create a table like the one below.If you are working with a team you want want to discuss all the segments and make sure you are breaking up the target into logical groups. The ideal range per group is 3 to 10 people.In this case we need 45 people.',
          type: 'text',
        },
        {
          id: 'unstgge3ahea',
          content: `${ASSET_FOLDER}/tools/unst/table.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      stepNo: 2,
    },
    {
      id: 'unstggea3ag',
      content: 'Reach out to customers/users of each group to invite them to your study',
      stepNo: 3,
    },
    {
      id: 'unstaea4geag',
      content: [
        {
          id: 'unstga4bsn4s',
          content: `Create your research hypothesis and prepare to use a research technique for your study. Choose the appropriate technique by asking yourself the following question: Can I find this information online and will it be relevant, specific and updated? If yes, please use our secondary market research techniques, such as [Secondary Research](${WEBSITE_URL}/tool/sere) or [Personas](${WEBSITE_URL}/tool/pe). If the answer is no, you may consider using one of the following techniques: [Collage](${WEBSITE_URL}/tool/cll), [Card Sort](${WEBSITE_URL}/tool/scrt), [Dialogue Research](${WEBSITE_URL}/tool/dirh).`,
          type: 'text',
        },
        {
          id: 'unstg3aha',
          content: '**NOTE:** Make sure to be sensitive to gender, race and other taboo topics when interviewing. Some communities are not comfortable sharing their feelings or thoughts with certain other groups, or in general. If you are creating a group interview make sure you understand the dynamics before deciding on format.',
          type: 'text',
        },
      ],
      stepNo: 4,
    },
  ],
};

// unstaea4geag step4 - REF add more references.