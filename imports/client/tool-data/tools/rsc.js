import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/rsc`,
  image: `${ASSET_FOLDER}/tools/restructuring-challenge.png`,
  title: 'Restructure the Challenge',
  preHeader: 'Tool',
  materials: [
    'stickies',
    'pencil',
    'whiteboard',
  ],
  purpose: 'Analyze a Problem Or Situation',
  description: 'This technique is used to solve difficult problems by adoping new perspectives and allowing you to create better hypotheses.',
  beforeYouStart: `The reason a problem seems difficult is often because we have been asking the wrong questions. Using this tool, you will first discover if you have been narrowing the possibilities for a solution by defining the problem in a way that is not useful. 

This may happen when you have defined the tool, rather than the problem. For example, imagine that you want to reach a balloon that has floated up to the ceiling. You might say the problem is that you don’t have a chair. This is a kind of ‘problem blindness’.

In this situation you are closing your options to a chair, and limiting your chance of finding another solution due to the way you are defining your problem. But you could potentially retrieve the balloon using other creative means such as using a long stick, or using a fan, etc. This is an unlikely example - but it describes a common problem, especially with long-term ongoing problems that have been inherited from previous teams.

Using this tool, you will make sure you have not defined the problem in a way that is impeding your ability to solve it, and then you will find ways to define your problem that will help you to solve it.`,
  backgroundSize: '',
  backgroundPosition: '',
  time: '30-60m',
  team: 'You or Team',
  steps: [
    {
      id: 'rsc3aah4a',
      content: 'Write your problem or challenge at the center of the paper or whiteboard. It should be a short, single sentence. You can create it as a question, as well. For example: Improve my user experience design, or How can we improve our UX design?',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'rsca3ah4h4',
      content: [
        {
          id: 'rsc23hshshsh',
          content: `Now it's time to define the problem deeply. Think about an ultimate impact that will be achieved once the problem is solved, or reasons you might want to solve this problem. 
          
For example, ‘we want to improve UX design so that  older people will be able to buy online easily’ or ‘we want to improve UX design so that more users make it through the checkout process’. Ask everyone to think about this for 5-10 min, write it on sticky notes and stick the answers around the problem.

If your team is large and you have different answers discuss and vote on the best options to pursue while keeping the user in mind.`,
          type: 'text',
        },
      ],
      stepNo: 2,
    },
    {
      id: 'rsc3hsh4s',
      content: [
        {
          id: 'unstgeafeageafea2',
          content: 'Think about the barriers you are facing. They can be time-based, resource-based, geographic, cultural, competition-based, or skills-based. Write them on sticky notes of a different colour and add them near the solutions you and your team added to the board earlier. (5-10 min)',
          type: 'text',
        },
      ],
      stepNo: 3,
    },
    {
      id: 'rscaeaa4h4h4a',
      content: [
        {
          id: 'unstgeafeageafea2',
          content: 'Define the challenge **again** after thinking about all topics and barriers. Make the team discuss for 10 min and try to reach an agreement. (10 min)',
          type: 'text',
        },
      ],
      stepNo: 4,
    },
    {
      id: 'rsc3aahgea4a',
      content: `Finally, write down some of the possible solutions to the problem on sticky notes and stick them to a board. If there are a lot of possible solutions, it is a good idea group them together visually.

You may or may not find a useful definition for the problem. We often need to go through multiple discussions to figure out a useful definition. Keep notes from this session even if you didn't narrow the problem enough to drive an impact in decision making.`,
      type: 'mixed',
      stepNo: 5,
    },
  ],
};

// rsc3aahgea4a  If you had any useful ideas, you may want to move forward with other techniques such as Prioritization [REF], or Prototype Sessions [REF]
