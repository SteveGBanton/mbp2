import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/bci`,
  image: `${ASSET_FOLDER}/tools/chinese-portrait.png`,
  title: 'Chinese Portrait',
  preHeader: 'Tool',
  materials: [
    'deck',
    'pencil',
  ],
  purpose: 'Ideation',
  description: 'To brainstorm and develop concepts using lateral thinking. An excellent tool for graphic design, branding, product development, advertising and much more.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '20m-1h',
  team: 'You, Team',
  steps: [
    {
      id: 'step1',
      content: 'Divide the group into into subgroups of 3-5 people. Each group receives 1-3 cards.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Tell everybody the subject you are trying to generate ideas about. For example, you may be designing a logo, or a piece of furniture, or a piece of software etc. If you have details about product requirements or constraints, discuss them now and ask the teams to keep these in mind. For example, you may be designing a logo or chair for a luxury brand, or for a discount brand, or they must be a certain color or shape etc.',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: `
Ask everyone to turn their card up. Each card has a ‘topic’ or ‘type’ on it. Explain that each group must finish the following phrase based on the card they’ve just turned up:

**If [SUBJECT] was [CARD TOPIC] the chair would be [X] because of [Y].**

For example, if you were trying to design a new type of chair, and the card topic was ‘color’, the phrase might be:

“If this chair we are designing was a color, it would be white because you should feel like you’re sitting on a cloud.”

And another group may receive the card topic ‘emotion’:

“If this chair we are designing was an emotion, it would be pride because when you sit in it you should feel like a king.”

You may already see how the evolution of ideas could take place using this tool.`,
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'Everyone in each group must respond with at least one answer. Emphasize that giving [Y] reasons is important, because it helps generate valuable ideas to build from. Give the groups a few minutes to discuss their first cards, and ask them to come up with as many ideas as possible.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'Once each group has finished with their first card, ask them to present their best ideas to everybody and have a short informal discussion between groups.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Once all groups have shared their best ideas, give them another topic card and start again.',
      type: 'mixed',
      stepNo: 6,
    },
    {
      id: 'step10',
      content: [
        {
          id: 'step101',
          content: 'Repeat until you have generated enough good ideas or until you run out of time.',
          type: 'text',
        },
      ],
      type: 'mixed',
      stepNo: 9,
    },
  ],
};
