import { ASSET_FOLDER } from '../../../startup/configuration';

const TOOL_FOLDER = '/tool';

export default {
  link: `${TOOL_FOLDER}/tmb`,
  image: `${ASSET_FOLDER}/tools/skills-resources.png`,
  title: 'Skills & Resources',
  preHeader: 'Tool',
  materials: [
    'pencil',
  ],
  purpose: 'Market Research',
  description: '',
  beforeYouStart: `How do you know when you have an effective team?

An effective team has the following 6 characteristics. Here, we'll illustrate each characteristic by comparison with an excellent example of teamwork in nature: Canadian geese.

**1. A sense of direction and community**

Teams who share a common direction and sense of community can get where they are going quicker and easier because they are traveling on the thrust of one another. The efficiency of the entire team is determined by its members’ coordinated interactive effort. In Canadian geese, an example of this characteristic is seen in the coordinated “V” flying formation, where each goose adds an ‘uplift’ for the bird following. As a result, the flock adds a surprising amount of flying range.

**2. They actively help each other**

Each individual in a team should be willing to accept help and to give help to others. The collective effort of the team outperforms the best individual effort. If a goose falls out of formation, it suddenly feels the drag and resistance of flying alone. It quickly moves back into formation to take advantage of the lifting power of the bird immediately in front of it.

**3. Each member is a leader**

As with geese, people are interdependent on each other’s skills, capabilities, and unique arrangements of gifts, talents, perspectives, and resources. Great teams are simultaneously focused on the business and on their members’ leadership development. When a lead goose tires, it rotates back into the formation and another goose flies to the point position.

**4. The members motivate one another**

Mutual encouragement is given and received by each member. The geese in flying formation honk to encourage those up front to keep up their speed.

**5. Members care about one another**

When a goose gets sick, wounded, or is shot down, two geese drop out of formation and follow it down to help and protect it. They stay until it dies or is able to fly again.

**6. The team possesses a clear roadmap to the goal**

Teams are most effective when every member has a clear picture of the final destination and a view of the route being taken to get there. The “V” formation is the only configuration which provides for a clear leader and the benefits of uplift, yet affords every goose an unobstructed view of the flight path.

This team building exercise can be used to instill these traits into any team.
`,
  backgroundSize: '',
  backgroundPosition: '',
  time: '60m',
  team: 'Team 2+',
  steps: [
    {
      id: 'step1',
      content: [
        {
          id: 'step101',
          content: 'First assess how many team members you’ll use. Create a list of your staff availability and when the exercise should start and end.',
          type: 'text',
        },
        {
          id: 'step102',
          content: `${ASSET_FOLDER}/tools/tmb/tmb-step1.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step2',
      content: [
        {
          id: 'step201',
          content: 'Look at each member of your team and create a list of their skills. Determine what each member excels at and at what each member is not so skilled.',
          type: 'text',
        },
        {
          id: 'step202',
          content: `${ASSET_FOLDER}/tools/tmb/tmb-step2.png`,
          maxHeight: 800,
          type: 'image',
        },
      ],
      type: 'mixed',
      stepNo: 1,
    },
    {
      id: 'step3',
      content: 'Think about others you can call in case your team needs help with a specific capability or technical skill that they currently lack (eg. others within the business but not within the team or external consultants).',
      stepNo: 2,
    },
    {
      id: 'step4',
      content: `Create a structured meeting schedule to give everyone the option to discuss and ask for help. A great way to implement this is to use a method taken from Scrum [REF.XX Project Management].

Meet periodically for 10 min so each member can:

i. Tell the group what they are doing right now
ii. If they are going to need help from someone
iii. If they think they are going to finish on time or not.

This will give each member the chance to offer help or reschedule their next task, etc. This is also helpful to make sure the project manager is providing everyone with all the tools they need to complete their task. 

Weekly or daily meetings are appropriate, where each member has 2-5 min to explain tasks and get feedback. If a member required more in-depth discussion, a meeting can be scheduled for later on. 
`,
      stepNo: 4,
    },
    {
      id: 'step5',
      content: 'Write down and formalize milestones and tasks necessary to reach the goal. Post these somewhere everybody can see them. If they are altered, make sure to discuss changes in the daily/weekly meeting.',
      type: 'mixed',
      stepNo: 5,
    },
  ],
};
