import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SearchDrawer, SearchFade } from './';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }

});

function SearchPage() {
  const classes = useStyles();
  return (
    <main>
      <SearchDrawer />
      {/* <SearchFade /> */}
    </main>
  );
}

export default SearchPage;
