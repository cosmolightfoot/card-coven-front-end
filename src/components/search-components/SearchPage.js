import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { SearchDrawer, NewSearchButton } from './';
import { Card, TransformCard } from '../';
import { headerHeight, sidebarWidth } from '../../styling/styling-vars';
import {
  getSearchResults,
  getSearchNoSearches
} from '../../selectors/searchSelectors';

import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import PageResults from './PageResults';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight + 40}px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gallery: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    justifyContent: 'center',
    minHeight: `calc(100vh - ${headerHeight + 40}px)`,
    margin: '20px',
    // border:  '3px solid'
  },
  message: {
    position: 'relative',
    left: `${-sidebarWidth / 2}px`,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300
  }
}));

function SearchPage({ results, noSearches }) {
  const classes = useStyles();

  return (
    <>
      <main className={classes.root}>
        {noSearches ? null : results.length > 0 ? (
          <ul className={classes.gallery}>
            {results.map(card => {
              if(card.layout === 'transform') {
                return <TransformCard cardData={card} />;
              } else {
                return <Card cardData={card} />;
              }
            })}
          </ul>
        ) : (
          <Typography className={classes.message} variant="h5">
              Your Search Returned No Results
          </Typography>
        )}
        <SearchDrawer />
        <NewSearchButton />
        <PageResults />
      </main>
    </>
  );
}

SearchPage.propTypes = {
  results: PropTypes.array,
  noSearches: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  results: getSearchResults(state),
  noSearches: getSearchNoSearches(state)
});

export default connect(mapStateToProps)(SearchPage);
