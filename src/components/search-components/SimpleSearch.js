import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { SimpleText, SimpleColors } from './';

const useStyles = makeStyles({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

function SimpleSearch() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <SimpleText />
      <SimpleColors />
    </form>
  );
}

export default SimpleSearch;
