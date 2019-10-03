import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SearchDrawer, Card } from './';
import { headerHeight } from '../../styling/styling-vars';
import cardData from '../../data/cardData';

import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  gallery: {
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight + 40}px)`,
    margin: '20px',
  }
});

function SearchPage() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <SearchDrawer />
      <ul className={classes.gallery}><Card cardData={cardData} /></ul>
    </main>
  );
}

const mapStateToProps = state => ({});

export default SearchPage;
