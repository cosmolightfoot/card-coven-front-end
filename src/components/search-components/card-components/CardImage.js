import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { cardWidth } from '../../../styling/styling-vars';

const useStyles = makeStyles({
  image: {
    width: `${cardWidth}px`,
  },
  wrapper: {
    position: 'relative',
  },
  frame: {
    position: 'absolute',
    width: `${cardWidth}px`,
    height: '350px',
    top: 0,
    zIndex: '12',
    backgroundColor: 'none',
    border: '7px solid black',
    borderRadius: '5px 5px 0px 0px'
  }
});

function CardImage({ uri }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={uri} className={classes.image}></img>
      <div className={classes.frame}></div>
    </div>
  );
}

export default CardImage;
