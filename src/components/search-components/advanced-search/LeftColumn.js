import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import textFields from '../text/textFields';
import SetSelect from '../selects/SetSelect';

const useStyles = makeStyles(theme => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%',
    height: '100%',
    minHeight: '380px',
    margin: '0px'
  }
}));

const textStyles = makeStyles(theme => ({
  input: {
    width: '100%',
    marginBottom: theme.spacing(3)
  }
}));

function LeftColumn() {
  const classes = useStyles();
  const { CardTypeLine } = textFields;
  return (
    <section className={classes.column}>
      <CardTypeLine insertStyles={textStyles} />
      <SetSelect />
    </section>
  );
}

export default LeftColumn;
