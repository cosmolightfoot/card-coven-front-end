import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { cardWidth } from '../../styling/styling-vars';
import { CardImage } from './';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SyncIcon from '@material-ui/icons/Sync';
import Layers from '@material-ui/icons/Layers';
import ScatterPlot from '@material-ui/icons/ScatterPlot';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: cardWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actions: {
    
  }
}));

function MagicCard({ cardData }) {
  const classes = useStyles();
  const [isTransformed, transformCard] = React.useState(false);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardImage uri={cardData.card_faces[isTransformed ? 1 : 0].image_uris.normal} alt={cardData.name} />
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton aria-label="flip transform card" onClick={() => transformCard(!isTransformed)}>
          <SyncIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to synergy">
          <ScatterPlot />
        </IconButton>
        <IconButton aria-label="add to deck">
          <Layers />
        </IconButton>
      </CardActions>
    </Card>
  );
}

MagicCard.propTypes = {
  cardData: PropTypes.shape({}).isRequired
};

export default MagicCard;
