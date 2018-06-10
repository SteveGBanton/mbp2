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
import kanoTool from './tools/kano';
import cnnbTool from './tools/cnnb';
import tmbTool from './tools/tmb';

import brainstormingPhase from './phases/brainstorming';
import marketPhase from './phases/market';
import discussPhase from './phases/discuss';
import teamPhase from './phases/team';
import projectPhase from './phases/project';

export const designPhases = {
  market: marketPhase,
  brainstorming: brainstormingPhase,
  discuss: discussPhase,
  project: projectPhase,
  team: teamPhase,
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
  kano: kanoTool,
  cnnb: cnnbTool,
  tmb: tmbTool,
};
