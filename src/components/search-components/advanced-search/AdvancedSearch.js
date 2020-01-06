import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';


const useStyles = makeStyles({
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

function AdvancedSearch() {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </form>
  );
}

export default AdvancedSearch;
