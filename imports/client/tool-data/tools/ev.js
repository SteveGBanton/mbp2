import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/rflw`,
  image: `${ASSET_FOLDER}/tools/resource-flow.png`,
  title: 'Resource Flow',
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
  purpose: 'Market Research',
  description: '',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '60-90m',
  team: 'You, team 2+',
  steps: [
    {
      id: 'unstaea4bea',
      content: '',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'unstafeag2eage',
      content: [
        {
          id: 'unstgeafeageafea2',
          content: 'Next, split your target into groups, and create a table like the one below.If you are working with a team you want want to discuss all the segments and make sure you are breaking up the target into logical groups.The ideal range per group is 3 to 10 people.In this case we need 45 people.',
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
  ],
}
