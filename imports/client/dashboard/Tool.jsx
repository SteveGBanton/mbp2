import React from 'react';
import { string, shape } from 'prop-types';
import escape from 'lodash.escape';
import classNames from 'classnames';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

import MaterialsCard from './MaterialsCard';
import styles from './Tool.styles';
import { ASSET_FOLDER, WEBSITE_URL } from '../../startup/configuration';

const deliverHTML = (content) => {
  if (Object.prototype.toString.call(content) === '[object String]') {
    return (
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: escape(content) }}
      />);
  }
  const clean = content.map((item) => {
    if (item.type === 'text') {
      return (
        <Typography
          key={item.id}
          variant="body1"
          dangerouslySetInnerHTML={{ __html: escape(item.content) }}
        />);
    } else if (item.type === 'image') {
      return (
        <Grid
          key={item.id}
          container
          justify="center"
          alignItems="center"
        >
          <img style={{ maxWidth: '100%', maxHeight: 300 }} src={item.content} alt="" />
        </Grid>
      );
    }
    return null;
  });
  return clean;
};

const ToolComponent = ({
  tools,
  match,
  match: { params: { toolId } },
  classes,
}) => {
  const tool = toolId && tools[toolId] ? tools[toolId] : {};
  return (
    <Grid
      container
      justify="center"
      className={classes.root}
    >
      {tool &&
      <React.Fragment>
        <Grid
          container
          className={classes.toolHeader}
          justify="center"
        >
          <Grid
            container
            alignItems="center"
            className={classes.toolHeaderInner}
          >
            <Grid
              container
              className={classes.toolHeaderLeft}
              direction="column"
            >
              <div
                className={classes.preHeaderText}
                style={{ color: '#616161' }}
              >
                {tool.preHeader}
              </div>
              <Typography variant="headline">{tool.title}</Typography>
              <Typography
                style={{ marginTop: 40 }}
                variant="body1"
              >
                {tool.description}
              </Typography>
            </Grid>
            <Grid
              container
              justify="center"
              className={classes.toolHeaderRight}
              direction="column"
            >
              <Grid
                container
                alignItems="center"
                direction="row"
                style={{ padding: 5 }}
              >
                <div className={classNames(classes.circle, classes.yellow)} />
                <Typography
                  variant="body1"
                  style={{ color: '#616161', maxWidth: 150 }}
                >
                  {tool.purpose}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                direction="row"
                style={{ padding: 5 }}
              >
                <div className={classNames(classes.circle, classes.teal)} />
                <Typography
                  variant="body1"
                  style={{ color: '#616161', maxWidth: 150 }}
                >
                  {tool.team}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                direction="row"
                style={{ padding: 5 }}
              >
                <div className={classNames(classes.circle, classes.grey)} />
                <Typography
                  variant="body1"
                  style={{ color: '#616161', maxWidth: 150 }}
                >
                  {tool.time}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.toolBody}
          direction="column"
        >
          <React.Fragment>
            <Typography
              style={{ marginTop: 60 }}
              variant="display4"
            >
                What You Will Need
            </Typography>
            {tool.materials &&
              <Grid container justify="center">
                {tool.materials.map(item => (
                  <MaterialsCard key={item} item={item} />
                ))}
              </Grid>
            }
            {tool.beforeYouStart &&
              <Grid>
                <Typography
                  style={{ marginTop: 60 }}
                  variant="display4"
                >
                  Before You Start
                </Typography>
                <Typography
                  style={{ marginTop: 30 }}
                  variant="body1"
                >
                  {tool.beforeYouStart}
                </Typography>
              </Grid>
            }
            <Typography
              variant="display4"
              style={{ marginTop: 60 }}
            >
              Steps
            </Typography>
            {tool.steps && tool.steps.map(item => (
              <Grid
                className={classes.stepCard}
                container
                key={item.id}
              >
                <Grid
                  className={classes.stepCardLeft}
                  container
                  justify="center"
                >
                  <div id={`${item.stepNo}`} style={{ position: 'absolute', top: -65, left: 0 }} />
                  <Typography variant="display3">{item.stepNo}</Typography>
                </Grid>
                <Grid
                  className={classes.stepCardRight}
                  container
                >
                  {deliverHTML(item.content)}
                  <Tooltip
                    id="calendar-tooltip"
                    title="Add Step To Google Calendar"
                    enterDelay={200}
                  >
                    <a
                      href={`https://calendar.google.com/calendar/r/eventedit?text=${tool.title}+Step+${item.stepNo}&details=Nova+Tool+Reference:+${WEBSITE_URL}${match.url}%23${item.stepNo}`}
                      target="_blank"
                    >
                      <img
                        style={{ marginTop: 10, marginRight: 5 }}
                        alt="cal"
                        src={`${ASSET_FOLDER}/icons/calendar.png`}
                        width="40"
                        height="40"
                      />
                    </a>
                  </Tooltip>
                </Grid>
              </Grid>
            ))}
          </React.Fragment>
        </Grid>
      </React.Fragment>}
    </Grid>
  );
};

ToolComponent.defaultProps = {
  match: {
    url: WEBSITE_URL,
    params: {},
  },
  tools: {},
};

ToolComponent.propTypes = {
  match: shape({
    url: string,
    params: shape({
      toolId: string,
    }),
  }),
  tools: shape({}),
  classes: shape({}).isRequired,
};


export default withStyles(styles)(ToolComponent);
