import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AdvancedColors } from '..';
import textFields from '../text/textFields';

const useStyles = makeStyles({
  className: {

  }

});

function AdvancedSearch() {
  const classes = useStyles();
  const { CardName, CardText, CardTypeLine } = textFields;
  return (
    <>
    <AdvancedColors />
    <CardName />
    <CardText />
    <CardTypeLine />
    </>
  );
}

export default AdvancedSearch;
