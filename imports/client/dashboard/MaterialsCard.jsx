import React from 'react';
import { string, shape } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { ASSET_FOLDER } from '../../startup/configuration';

const styles = () => ({
  root: {
    boxShadow: '0 6px 22px rgba(0,0,0,0.12), 0 6px 10px rgba(0,0,0,0.08)',
    borderRadius: 6,
    margin: '30px 10px 0 10px',
    width: 130,
    height: 90,
    marginTop: 70,
    position: 'relative',
  },
  cardName: {
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '40%',
    backgroundColor: '#EEE',
  },
  image: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    position: 'absolute',
    top: -40,
    left: 0,
    width: '100%',
    height: '80%',
    '& img': {
      maxHeight: '130%',
      maxWidth: '90%',
    },
  },
});

const getCard = {
  board: {
    image: 'board.png',
    text: 'Nova Board',
  },
  crafting: {
    image: 'crafting.png',
    text: 'Craft Supplies',
  },
  deck: {
    image: 'deck.png',
    text: 'Nova Deck',
  },
  stickies: {
    image: 'stickies.png',
    text: 'Sticky Notes',
  },
  camera: {
    image: 'camera.png',
    text: 'Recording Device',
  },
  pencil: {
    image: 'pencil.png',
    text: 'Pencil & Paper',
  },
  whiteboard: {
    image: 'whiteboard.png',
    text: 'Whiteboard',
  },
  online: {
    image: 'online.png',
    text: 'Data Resources',
  },
};

const MaterialsCardComponent = ({ item, classes }) => (
  <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
    <Grid container className={classes.image} justify="center" alignItems="center">
      <img
        src={`${ASSET_FOLDER}/materials/${getCard[item].image}`}
        alt={getCard[item].text}
      />
    </Grid>
    <Grid container className={classes.cardName} justify="center" alignItems="center">
      <Typography variant="body2">{getCard[item].text}</Typography>
    </Grid>
  </Grid>
);

MaterialsCardComponent.propTypes = {
  item: string.isRequired,
  classes: shape({}).isRequired,
};

export default withStyles(styles)(MaterialsCardComponent);
