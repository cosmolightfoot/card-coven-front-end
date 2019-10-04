import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { cardWidth } from '../../styling/styling-vars';

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
    height: '320px',
    top: 0,
    zIndex: '12',
    backgroundColor: 'none',
    border: '7px solid black',
    borderBottom: '12px',
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

CardImage.propTypes = {
  uri: PropTypes.string.isRequired
};

export default CardImage;
