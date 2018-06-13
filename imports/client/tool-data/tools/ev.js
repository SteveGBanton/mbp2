import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/ev`,
  image: `${ASSET_FOLDER}/tools/evaluation-board.png`,
  title: 'Evaluation Board',
  preHeader: 'Tool',
  materials: [
    'board',
    'stickies',
    'pencil',
    'whiteboard',
  ],
  purpose: 'Evaluate Ideas',
  description: 'Use this tool to evaluate if an idea in its current form is good or bad, and also come up with ways to improve it.',
  beforeYouStart: '',
  backgroundSize: '',
  backgroundPosition: '',
  time: '30-60m',
  team: 'You, team 2+',
  steps: [
    {
      id: 'step1',
      content: 'Use the Nova board or draw four areas on a whiteboard as below, with areas labeled Utility, Advantages, Resources, and Convenience.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'If your team is present, make teams and give each team one of the four categories to focus on. If you are doing this activity without teams you will need to go through each category sequentially.',
      type: 'mixed',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: 'Introduce the topic of discussion. It can be a task, project, idea, concept, proposal or a variety of each. Discuss why it is important to the business and how it is relevant to each of the team members present. Make sure everybody in the meeting fully understands the purpose and implications of the topic.',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: `Once the initial discussion is done the teams will split up and discuss the idea from the point of view of their particular category. 
      
Give the teams 5-10 minutes to discuss amongst themselves. If there are no teams, discuss each category sequentially. Each team adds important points to sticky notes and sticks them to their area of the board. Here are some example questions to ask for each category:

1. Utility: How can we make this idea work? Why is the idea useful? What could cause this idea not to work?
2. Advantages: What are the advantages of this idea? What advantages would be gained if it was partially implemented / fully implemented? Are the advantages large? How long would they last?
3. Resources: Do we have the resources to execute this idea? Which other resources will be useful? Do we have time?
4. Convenience: Is this convenient for my customer? What kind of inconveniences are we going to have in implementing it, or after the implementation?
`,
      type: 'mixed',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'After all categories have been discussed, go one by one through all points posted to the board and discuss each with the entire team. At this point tell the team they will be coming up additional points to add one one of the categories, objecting to points made by other teams, or thinking of ways to improve/evolve the current idea. You can do this by discussing how you can make the idea more useful, increase advantages, reduce need for resources or making the idea more convenient or reusable etc.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'Next, discuss the best options for moving forward with the idea. Create an action plan for implementation. If you discover the idea is no longer feasible, you may put it on the backburner until conditions change or scrap it altogether.',
      type: 'mixed',
      stepNo: 6,
    },
  ],
};

// REF step6 - action plan for implementation?