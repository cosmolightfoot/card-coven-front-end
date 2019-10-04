import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SearchDrawer } from './';
import { Card, TransformCard } from '../';
import { headerHeight } from '../../styling/styling-vars';
import { getSearchResults } from '../../selectors/searchSelectors';

import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  gallery: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: `calc(100vh - ${headerHeight + 40}px)`,
    margin: '20px'
  }
});

function SearchPage({ results }) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <SearchDrawer />
      <ul className={classes.gallery}>
        {results.map(card => {
          if(card.layout === 'transform') {
            return <TransformCard cardData={card} />;
          } else {
            return <Card cardData={card} />;
          }
        })}
      </ul>
    </main>
  );
}

const mapStateToProps = state => ({
  results: getSearchResults(state)
});



export default connect(mapStateToProps)(SearchPage);
