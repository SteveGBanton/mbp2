import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/sth`,
  image: `${ASSET_FOLDER}/tools/six-thinking-hats.png`,
  title: 'Six Thinking Hats',
  preHeader: 'Tool',
  materials: [
    'deck',
  ],
  purpose: 'Market Research',
  description: 'Edward de Bono’s Six Thinking Hats is used to bring different perspectives to your thinking process in a systematic way. It is also a good exercise for a team in that it trains team members to use alternative ways of thinking more often. For example, those who tend to think about problems can learn to think about possibilities, and vice versa.',
  beforeYouStart: `
A hat is used to emphasize a certain way of thinking or to switch to a different style of thinking when you get stuck during a brainstorm session or meeting. Before and after using the hat the conversation is a traditional argument or discussion.

You can generally use the hats in one of two ways:

1. You can decide on a topic you want to think about from the outset and determine a sequence for using the hats, which will represent your thought process for the session.

2. Everyone on the team gets one hat and needs to focus on that style of thinking while they are wearing the hat. You can periodically exchange hats with different team members.

**Additional Tips**

* Allow limitless time for white hat discussions when a lot of information needs to be digested, but keep the thinking focused on the subject.
* Be flexible with green hat thinking. Switch to a different hat once the flow of ideas has stopped. You can always come back to the green hat later on.
* Restrict red hat thinking to 30 seconds to prevent people from wanting to explain or justify their feelings. Only allow more time when intuition and feelings are a major issue in the subject of study. For example, you may want to extend time for the red hat when discussing how a customer feels.
* The hats represent a style of thinking. They do not describe people, thinking habits or thoughts.
`,
  backgroundSize: '',
  backgroundPosition: '',
  time: '60-90m',
  team: 'You, team 2+',
  steps: [
    {
      id: 'step1',
      content: 'Determine when are you going to use the Six Thinking Hats and how you will use them. You can use the tool during a specific meeting, or even over a long period of time. For example, you can assign a hat to each team member and instruct them to use the hat for an entire week or during a specific project.',
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: 'Introduce this tool to the team and make sure they understand how it works, and each of the hats (listed below).',
      stepNo: 2,
    },
    {
      id: 'step3',
      content: 'Assign them a hat when you begin a session, or assign the entire team one hat at a time. You can either have a planned agenda of the hats you will use, or move between hats on the fly. You may assign hats verbally or hand out the cards representing each hat that come with Nova.',
      type: 'mixed',
      stepNo: 3,
    },
    {
      id: 'step4',
      content: 'If you are using the tool during a team meeting, invite each person to share their opinion based on the hat they should be representing. If you are using the six thinking hats over the course of a period of time or during a project, encourage team members to use the hat individually to improve their own thinking process and also to share their thoughts during team meetings.',
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'During meetings, let the conversation flow and make sure everyone gets enough time to talk.',
      type: 'mixed',
      stepNo: 5,
    },
    {
      id: 'step6',
      content: 'If someone runs out of ideas the leader should move the conversation to the next person.',
      type: 'mixed',
      stepNo: 6,
    },
  ],
};
