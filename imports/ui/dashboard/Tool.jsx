import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';

const styles = () => ({
  root: {
    width: '100%',
    marginTop: '-10',
  },
  toolHeader: {
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  toolHeaderInner: {
    padding: '3vw 5vw 3vw 5vw',
    maxWidth: 1100,
    backgroundColor: '#F5F5F5',
  },
  toolHeaderLeft: {
    padding: '3vw 5vw 3vw 5vw',
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  toolHeaderRight: {
    padding: '3vw 5vw 3vw 5vw',
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  toolBody: {
    padding: '30px 5vw 3vw 5vw',
    maxWidth: 900,
  },
  stepCard: {
    boxShadow: '0 6px 22px rgba(0,0,0,0.12), 0 6px 10px rgba(0,0,0,0.08)',
    padding: 0,
    borderRadius: 6,
    marginTop: 30,
  },
  stepCardLeft: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 90,
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  stepCardRight: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    height: '100%',
    width: 'calc(100% - 90px)',
    padding: 20,
  },
  requiredCard: {
    boxShadow: '0 6px 22px rgba(0,0,0,0.12), 0 6px 10px rgba(0,0,0,0.08)',
    padding: 20,
    borderRadius: 6,
    margin: '30px 10px 0 10px',
    width: 130,
    height: 160,
  },
  image: {
    maxHeight: 300,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      maxHeight: '300px',
      maxWidth: '100%',
    },
  },
});

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
            className={classes.toolHeaderInner}
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
            {tool.required &&
              <Grid container justify="center">
                {tool.required.map(item => (
                  <Grid key={item.id} className={classes.requiredCard} item>
                    <Typography variant="body1">{item.label}</Typography>
                  </Grid>
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
              if (item.type === 'text') {
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
                      <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </Grid>
                  </Grid>);
              }
              return (
                <Grid
                  key={item.id}
                  container
                  className={classes.image}
                  justify="center"
                  alignItems="center"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />);
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
