import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { SimpleText } from './';

const useStyles = makeStyles({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

function SimpleSearch() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <SimpleText />
    </form>
  );
}

export default SimpleSearch;
