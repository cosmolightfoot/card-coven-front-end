import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import textFields from '../text/textFields';
import SetSelect from '../selects/SetSelect';

const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    minHeight: '380px',
  }
});

function RightColumn() {
  const classes = useStyles();
  const { CardText } = textFields;
  return (
    <section className={classes.column}>
      <CardText />
      <SetSelect />
    </section>
  );
}

export default RightColumn;
