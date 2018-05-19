import { ASSET_FOLDER } from '../../startup/configuration';

const TOOLS_BROWSE_FOLDER = '/tools';
const TOOL_FOLDER = '/tool';

export const designPhases = {
  market: {
    id: 'card1',
    link: `${TOOLS_BROWSE_FOLDER}/market`,
    title: 'Identify Market Problems',
    image: `${ASSET_FOLDER}/market.png`,
    backgroundSize: '90px 175px',
    backgroundPosition: 'right top',
    preHeader: 'Innovation Phase',
    categories: {
      define: {
        id: 'cat1',
        link: `${TOOLS_BROWSE_FOLDER}/market/define`,
        image: `${ASSET_FOLDER}/categories/define-market.png`,
        title: 'Define Your Market',
        preHeader: 'Tool Category',
        tools: [
          'em',
          'unst',
        ],
      },
      analyze: {
        id: 'cat2',
        link: `${TOOLS_BROWSE_FOLDER}/market/analyze`,
        image: `${ASSET_FOLDER}/categories/analyze-problems.png`,
        title: 'Analyze Problems',
        preHeader: 'Tool Category',
        tools: [
          'rsc',
          'rflw',
          'csrt',
        ],
      },
      psych: {
        id: 'cat3',
        link: `${TOOLS_BROWSE_FOLDER}/market/psych`,
        title: 'Understand User Psychology',
        image: `${ASSET_FOLDER}/categories/understand-user-psychology.png`,
        preHeader: 'Tool Category',
        tools: [
          'dirh',
          'rflw',
          'csrt',
          'cll',
          'pe',
        ],
      },
      feedback: {
        id: 'cat4',
        link: `${TOOLS_BROWSE_FOLDER}/market/feedback`,
        image: `${ASSET_FOLDER}/categories/get-feedback.png`,
        title: 'Get Feedback & Opinions',
        preHeader: 'Tool Category',
        tools: [
          'dirh',
          'csrt',
        ],
      },
      env: {
        id: 'cat5',
        link: `${TOOLS_BROWSE_FOLDER}/market/env`,
        image: `${ASSET_FOLDER}/categories/define-market.png`,
        title: 'Define Your Market Environment',
        preHeader: 'Tool Category',
        tools: [
          'sere',
        ],
      },
    },
  },
  brainstorming: {
    id: 'card2',
    link: `${TOOLS_BROWSE_FOLDER}/brainstorming`,
    title: 'Brainstorming',
    image: `${ASSET_FOLDER}/brainstorming.png`,
    preHeader: 'Innovation Phase',
    categories: {
      ideation: {
        id: 'cat6',
        link: `${TOOLS_BROWSE_FOLDER}/brainstorming/ideation`,
        image: `${ASSET_FOLDER}/categories/start-ideation.png`,
        title: 'Start the Ideation Process',
        preHeader: 'Tool Category',
        tools: [
          'cra',
          'bci',
        ],
      },
      develop: {
        id: 'cat7',
        link: `${TOOLS_BROWSE_FOLDER}/brainstorming/develop`,
        image: `${ASSET_FOLDER}/categories/developing-ideas.png`,
        title: 'Develop Ideas',
        preHeader: 'Tool Category',
        tools: [
          'mac',
        ],
      },
    },
  },
  discuss: {
    id: 'card3',
    link: `${TOOLS_BROWSE_FOLDER}/discuss`,
    title: 'Discussion',
    image: `${ASSET_FOLDER}/discussion.png`,
    preHeader: 'Innovation Phase',
    // backgroundColor: '#7a7a7a',
    categories: {
      new: {
        id: 'cat8',
        link: `${TOOLS_BROWSE_FOLDER}/discuss/new`,
        title: 'Find New Ideas And Opportunities',
        image: `${ASSET_FOLDER}/categories/find-opportunity.png`,
        preHeader: 'Tool Category',
        tools: [
          'act',
          'sth',
        ],
      },
      evaluate: {
        id: 'cat10',
        link: `${TOOLS_BROWSE_FOLDER}/discuss/evaluate`,
        image: `${ASSET_FOLDER}/categories/evaluate-ideas.png`,
        title: 'Evaluate Ideas Reduce Business Risk',
        preHeader: 'Tool Category',
        tools: [
          'ev',
          'sth',
          'act',
        ],
      },
    },
  },
  project: {
    id: 'card4',
    link: `${TOOLS_BROWSE_FOLDER}/project`,
    title: 'Project Planning',
    image: `${ASSET_FOLDER}/project-management.png`,
    preHeader: 'Innovation Phase',
    categories: {
      identify: {
        id: 'cat11',
        link: `${TOOLS_BROWSE_FOLDER}/project/identify`,
        image: `${ASSET_FOLDER}/categories/reduce-risk.png`,
        title: 'Identify Project Problems/Risks',
        preHeader: 'Tool Category',
        tools: [
          'ev',
        ],
      },
      prioritization: {
        id: 'cat12',
        link: `${TOOLS_BROWSE_FOLDER}/project/prioritization`,
        // TODO: prioritization
        title: 'Prioritization',
        preHeader: 'Tool Category',
        tools: [
          'kano',
        ],
      },
    },
  },
  team: {
    id: 'card5',
    link: `${TOOLS_BROWSE_FOLDER}/team`,
    title: 'Team Building',
    image: `${ASSET_FOLDER}/team-building.png`,
    preHeader: 'Innovation Phase',
    categories: {
      teamwork: {
        id: 'cat13',
        link: `${TOOLS_BROWSE_FOLDER}/team/teamwork`,
        image: `${ASSET_FOLDER}/categories/reinforce-teamwork.png`,
        title: 'Reinforce Teamwork',
        preHeader: 'Tool Category',
        tools: [
          'cnnb',
        ],
      },
      culture: {
        id: 'cat14',
        link: `${TOOLS_BROWSE_FOLDER}/team/culture`,
        image: `${ASSET_FOLDER}/tools/evaluation-board.png`,
        // TODO: Culture item
        title: 'Create Team Culture',
        preHeader: 'Tool Category',
        tools: [
          'tmb',
        ],
      },
    },
  },
};

export const tools = {
  em: {
    link: `${TOOL_FOLDER}/em`,
    title: 'Extremes and Mainstreams',
    description: 'When trying to create a solution for a broad market, it is important to understand unusual/extreme users in addition to your mainstream users. This tool is a useful method to understand your extreme users and how they differ from the mainstream. When you study extreme users, you will be exposed to use cases and problem solving opportunities you may never have thought about, and will also uncover important insights about your mainstream users by contrast.',
    image: `${ASSET_FOLDER}/tools/extremes-and-mainstreams.png`,
    beforeYouStart: 'When trying to create a solution for a broad market, it is important to understand unusual/extreme users in addition to your mainstream users. This tool is a useful method to understand your extreme users and how they differ from the mainstream. When you study extreme users, you will be exposed to use cases and problem solving opportunities you may never have thought about, and will also uncover important insights about your mainstream users by contrast.',
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
            content: 'Write down the different groups of people that use your product or service. Define extreme and mainstream audiences, and define their approximate size by percentage of your total users.Extreme users may be small groups who use your product or service in an unusual way, may be considered ‘power users’, or may otherwise have characteristics that are not part of your mainstream audience.',
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
        content: 'Next, define [REF] a persona for each of these audiences. If you are working in teams, you can divide the audiences between them.',
        stepNo: 2,
      },
      {
        id: 'nsnrs3255',
        content: 'Start preliminary research by asking sales people, looking at statistics, etc., in order to begin to define your personas.',
        stepNo: 3,
      },
      {
        id: 'jdntd3255',
        content: 'When you have a basic definition for your extreme and mainstream users, the next step is to understand the difference between each audience as well as what they have in common. The best way to do this is through interviews. Prepare an interview or questionnaire [REF. Interview Tool] for at least one user in each audience segment.',
        stepNo: 4,
      },
      {
        id: 'bsh43hsns',
        content: 'List each discrete audience observation on its own sticky note for use in the next step. Try to list 50 or more for each audience, and add a user number and observation number to each note to keep track of observation sources. eg. "User3 #5, likes the way tasks are organized in the system".',
        stepNo: 5,
      },
      {
        id: 'begbe35hs',
        content: 'When all interviews have been carried out, hold a meeting to discuss and analyze findings. Because the purpose of this meeting is essentially to organize information and to reveal important insights, you may optionally use the [REF. Affinity Diagramming] tool to meaningfully cluster observations and show differences between groups (create columns for each audience segment). This is usually only necessary if you have gathered a lot of data that is difficult to sift through. If not using an Affinity Diagram: use the meeting to define key differences and similarities between your extreme and mainstream audiences.',
        stepNo: 6,
      },
      {
        id: 'ksesb326',
        content: 'These answers can be useful beyond your department. Make sure you think about how the answers might affect your organization in terms of marketing, sales, products, price points, advertising, work culture, interior design, communications, etc. You can also expand use of the data you’ve gathered by using discussion tools such as [REF. Six Thinking Hats] to brainstorm new ideas and solve any problems you’ve uncovered.',
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
  },
  unst: {
    link: `${TOOL_FOLDER}/unst`,
    image: `${ASSET_FOLDER}/tools/universe-of-study.png`,
    title: 'Universe of Study',
    preHeader: 'Tool',
  },
  pe: {
    link: `${TOOL_FOLDER}/pe`,
    image: `${ASSET_FOLDER}/tools/personas.png`,
    title: 'Personas',
    preHeader: 'Tool',
  },
  dirh: {
    link: `${TOOL_FOLDER}/dirh`,
    image: `${ASSET_FOLDER}/tools/dialogue-research.png`,
    title: 'Dialogue Research',
    preHeader: 'Tool',
  },
  rsc: {
    link: `${TOOL_FOLDER}/rsc`,
    image: `${ASSET_FOLDER}/tools/restructuring-challenge.png`,
    title: 'Restructure the Challenge',
    preHeader: 'Tool',
  },
  rflw: {
    link: `${TOOL_FOLDER}/rflw`,
    image: `${ASSET_FOLDER}/tools/resource-flow.png`,
    title: 'Resource Flow',
    preHeader: 'Tool',
  },
  csrt: {
    link: `${TOOL_FOLDER}/csrt`,
    image: `${ASSET_FOLDER}/tools/card-sort.png`,
    title: 'Card Sort',
    preHeader: 'Tool',
  },
  cll: {
    link: `${TOOL_FOLDER}/cll`,
    image: `${ASSET_FOLDER}/tools/collage.png`,
    title: 'Collage',
    preHeader: 'Tool',
  },
  sere: {
    link: `${TOOL_FOLDER}/sere`,
    image: `${ASSET_FOLDER}/tools/secondary-research.png`,
    title: 'Secondary Research',
    preHeader: 'Tool',
  },
  cra: {
    link: `${TOOL_FOLDER}/cra`,
    image: `${ASSET_FOLDER}/tools/wild-associations.png`,
    title: 'Wild Associations',
    preHeader: 'Tool',
  },
  bci: {
    link: `${TOOL_FOLDER}/bci`,
    image: `${ASSET_FOLDER}/tools/chinese-portrait.png`,
    title: 'Chinese Portrait',
    preHeader: 'Tool',
  },
  mac: {
    link: `${TOOL_FOLDER}/mac`,
    image: `${ASSET_FOLDER}/tools/challenges.png`,
    title: 'Challenges',
    preHeader: 'Tool',
  },
  act: {
    link: `${TOOL_FOLDER}/act`,
    image: `${ASSET_FOLDER}/tools/roles.png`,
    // TODO: image
    title: 'Roles',
    preHeader: 'Tool',
  },
  sth: {
    link: `${TOOL_FOLDER}/sth`,
    image: `${ASSET_FOLDER}/tools/six-thinking-hats.png`,
    title: 'Six Thinking Hats',
    preHeader: 'Tool',
  },
  ev: {
    link: `${TOOL_FOLDER}/ev`,
    image: `${ASSET_FOLDER}/tools/evaluation-board.png`,
    title: 'Evaluation Board',
    preHeader: 'Tool',
  },
  kano: {
    link: `${TOOL_FOLDER}/kano`,
    image: `${ASSET_FOLDER}/tools/kano-board.png`,
    title: 'KANO Analysis',
    preHeader: 'Tool',
  },
  cnnb: {
    link: `${TOOL_FOLDER}/cnnb`,
    image: `${ASSET_FOLDER}/tools/cannibal.png`,
    title: 'Cannibal',
    preHeader: 'Tool',
  },
  tmb: {
    link: `${TOOL_FOLDER}/tmb`,
    image: `${ASSET_FOLDER}/tools/skills-resources.png`,
    title: 'Skills & Resources',
    preHeader: 'Tool',
  },
};
