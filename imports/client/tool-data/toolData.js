import { ASSET_FOLDER } from '../../startup/configuration';
import rscTool from './tools/rsc';
import rflwTool from './tools/rflw';
import csrtTool from './tools/csrt';
import cllTool from './tools/cll';
import sereTool from './tools/sere';
import craTool from './tools/cra';
import bciTool from './tools/bci';
import macTool from './tools/mac';
import actTool from './tools/act';
import sthTool from './tools/sth';
import evTool from './tools/ev';
import dirhTool from './tools/dirh';
import peTool from './tools/pe';
import unstTool from './tools/unst';
import emTool from './tools/em';

export const TOOLS_BROWSE_FOLDER = '/tools';
export const TOOL_FOLDER = '/tool';

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
        image: `${ASSET_FOLDER}/categories/prioritization.png`,
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
        image: `${ASSET_FOLDER}/categories/team-culture.png`,
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
  em: emTool,
  unst: unstTool,
  pe: peTool,
  dirh: dirhTool,
  rsc: rscTool,
  rflw: rflwTool,
  csrt: csrtTool,
  cll: cllTool,
  sere: sereTool,
  cra: craTool,
  bci: bciTool,
  mac: macTool,
  act: actTool,
  sth: sthTool,
  ev: evTool,
  kano: {
    link: `${TOOL_FOLDER}/kano`,
    image: `${ASSET_FOLDER}/tools/kano-board.png`,
    title: 'KANO Analysis',
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
        id: 'step1',
        content: 'Contact clients or people who represent your audience for interviews (use the [REF. Universe of Study] to establish your audience). Ask them to meet for 30-60 min to talk about the subject you are working on.',
        type: 'mixed',
        stepNo: 1,
      },
      {
        id: 'step2',
        content: 'This interview can be in groups or done individually. Make sure you are not talking about difficult or sensitive topics if you decide to do a group interview.',
        stepNo: 2,
      },
      {
        id: 'step3',
        content: 'To prepare for the interview, create a quick introduction to the topic, and create a list of questions you would like to ask. Keep in mind that the purpose of this tool is to understand how the customer uses their resources. It can be used with other tools at the same interview (such as Card Sort), but not necessarily. By the end of the interview, you want to understand their priorities and how money or time affects their decisions.',
        type: 'mixed',
        stepNo: 3,
      },
      {
        id: 'step4',
        content: 'At the interview, make sure you are recording, and give each interviewee a piece of paper and a pen. ',
        stepNo: 4,
      },
      {
        id: 'step5',
        content: 'Invite them to start by asking them to create a list of everything that brings money into their household/workplace, or saves them money or time. Give them 5-10 min to answer.',
        type: 'mixed',
        stepNo: 5,
      },
      {
        id: 'step6',
        content: 'Second, ask them to list or draw everything that takes money, time, or opportunity away.',
        type: 'mixed',
        stepNo: 6,
      },
      {
        id: 'step10',
        content: [
          {
            id: 'step101',
            content: 'Next, split your target into groups, and create a table like the one below.If you are working with a team you want want to discuss all the segments and make sure you are breaking up the target into logical groups.The ideal range per group is 3 to 10 people.In this case we need 45 people.',
            type: 'text',
          },
          {
            id: 'step102',
            content: `${ASSET_FOLDER}/tools/unst/table.png`,
            maxHeight: 800,
            type: 'image',
          },
        ],
        type: 'mixed',
        stepNo: 9,
      },
    ],
  },
  cnnb: {
    link: `${TOOL_FOLDER}/cnnb`,
    image: `${ASSET_FOLDER}/tools/cannibal.png`,
    title: 'Cannibal',
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
        id: 'step1',
        content: 'Contact clients or people who represent your audience for interviews (use the [REF. Universe of Study] to establish your audience). Ask them to meet for 30-60 min to talk about the subject you are working on.',
        type: 'mixed',
        stepNo: 1,
      },
      {
        id: 'step2',
        content: 'This interview can be in groups or done individually. Make sure you are not talking about difficult or sensitive topics if you decide to do a group interview.',
        stepNo: 2,
      },
      {
        id: 'step3',
        content: 'To prepare for the interview, create a quick introduction to the topic, and create a list of questions you would like to ask. Keep in mind that the purpose of this tool is to understand how the customer uses their resources. It can be used with other tools at the same interview (such as Card Sort), but not necessarily. By the end of the interview, you want to understand their priorities and how money or time affects their decisions.',
        type: 'mixed',
        stepNo: 3,
      },
      {
        id: 'step4',
        content: 'At the interview, make sure you are recording, and give each interviewee a piece of paper and a pen. ',
        stepNo: 4,
      },
      {
        id: 'step5',
        content: 'Invite them to start by asking them to create a list of everything that brings money into their household/workplace, or saves them money or time. Give them 5-10 min to answer.',
        type: 'mixed',
        stepNo: 5,
      },
      {
        id: 'step6',
        content: 'Second, ask them to list or draw everything that takes money, time, or opportunity away.',
        type: 'mixed',
        stepNo: 6,
      },
      {
        id: 'step10',
        content: [
          {
            id: 'step101',
            content: 'Next, split your target into groups, and create a table like the one below.If you are working with a team you want want to discuss all the segments and make sure you are breaking up the target into logical groups.The ideal range per group is 3 to 10 people.In this case we need 45 people.',
            type: 'text',
          },
          {
            id: 'step102',
            content: `${ASSET_FOLDER}/tools/unst/table.png`,
            maxHeight: 800,
            type: 'image',
          },
        ],
        type: 'mixed',
        stepNo: 9,
      },
    ],
  },
  tmb: {
    link: `${TOOL_FOLDER}/tmb`,
    image: `${ASSET_FOLDER}/tools/skills-resources.png`,
    title: 'Skills & Resources',
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
        id: 'step1',
        content: 'Contact clients or people who represent your audience for interviews (use the [REF. Universe of Study] to establish your audience). Ask them to meet for 30-60 min to talk about the subject you are working on.',
        type: 'mixed',
        stepNo: 1,
      },
      {
        id: 'step2',
        content: 'This interview can be in groups or done individually. Make sure you are not talking about difficult or sensitive topics if you decide to do a group interview.',
        stepNo: 2,
      },
      {
        id: 'step3',
        content: 'To prepare for the interview, create a quick introduction to the topic, and create a list of questions you would like to ask. Keep in mind that the purpose of this tool is to understand how the customer uses their resources. It can be used with other tools at the same interview (such as Card Sort), but not necessarily. By the end of the interview, you want to understand their priorities and how money or time affects their decisions.',
        type: 'mixed',
        stepNo: 3,
      },
      {
        id: 'step4',
        content: 'At the interview, make sure you are recording, and give each interviewee a piece of paper and a pen. ',
        stepNo: 4,
      },
      {
        id: 'step5',
        content: 'Invite them to start by asking them to create a list of everything that brings money into their household/workplace, or saves them money or time. Give them 5-10 min to answer.',
        type: 'mixed',
        stepNo: 5,
      },
      {
        id: 'step6',
        content: 'Second, ask them to list or draw everything that takes money, time, or opportunity away.',
        type: 'mixed',
        stepNo: 6,
      },
      {
        id: 'step10',
        content: [
          {
            id: 'step101',
            content: 'Next, split your target into groups, and create a table like the one below.If you are working with a team you want want to discuss all the segments and make sure you are breaking up the target into logical groups.The ideal range per group is 3 to 10 people.In this case we need 45 people.',
            type: 'text',
          },
          {
            id: 'step102',
            content: `${ASSET_FOLDER}/tools/unst/table.png`,
            maxHeight: 800,
            type: 'image',
          },
        ],
        type: 'mixed',
        stepNo: 9,
      },
    ],
  },
};
