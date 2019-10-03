import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleBlack, SimpleWhite, SimpleRed, SimpleBlue, SimpleGreen } from '../';

const useStyles = makeStyles({
  colors: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-evenly',
    margin: '50px'
  }

});

function component() {
  const classes = useStyles();
  return (
    <section className={classes.colors}>
      <SimpleBlue />
      <SimpleBlack />
      <SimpleRed />
      <SimpleWhite />  
      <SimpleGreen />
    </section>    
  );
}

export default component;
