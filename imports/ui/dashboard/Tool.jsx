import React from 'react';
import escape from 'lodash.escape';
import classNames from 'classnames';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import MaterialsCard from './MaterialsCard';
import styles from './Tool.styles';


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
  history,
  tools,
  designPhases,
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
              <Typography
                variant="display2"
                style={{ color: '#616161' }}
              >
                {tool.preHeader}
              </Typography>
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
            {tool.steps && tool.steps.map((item) => {
              return (
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
                    <Typography variant="display3">{item.stepNo}</Typography>
                  </Grid>
                  <Grid
                    className={classes.stepCardRight}
                    container
                  >
                    {deliverHTML(item.content)}
                    <a
                      href={`https://calendar.google.com/calendar/r/eventedit?text=${tool.title}&details=Nova+Tool+Reference:+${Meteor.settings.public.website}&sf=true&output=xml`}
                      target="_blank"
                    >
                      <img
                        style={{ marginTop: 10, marginRight: 5 }}
                        alt="cal"
                        src="http://localhost:1250/assets/icons/calendar.png"
                        width="40"
                        height="40"
                      />
                    </a>
                  </Grid>
                </Grid>);
            })}
          </React.Fragment>
        </Grid>
      </React.Fragment>}
    </Grid>
  );
};

ToolComponent.defaultProps = {
  match: {
    params: {},
  },
};

export default withStyles(styles)(ToolComponent);
