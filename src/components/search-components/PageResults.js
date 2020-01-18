import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { getCurrentSearch, getSearchCurrentPage, getSearchTotalPages, getSearchDisplaying, getSearchHasLess, getSearchHasMore, getSearchTotalCount } from '../../selectors/searchSelectors';

import KeyBoardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyBoardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';

import blackMana from '../../assets/b-mana.svg';
import blueMana from '../../assets/u-mana.svg';
import redMana from '../../assets/r-mana.svg';
import greenMana from '../../assets/g-mana.svg';
import whiteMana from '../../assets/w-mana.svg';
import phyrexianMana from '../../assets/p-mana.svg';

import { newAdvancedSearch, newSimpleSearch } from '../../actions/cardSearchActions';
import shortid from 'shortid';

const manaIcons = [
  blueMana,
  phyrexianMana,
  blackMana,
  phyrexianMana,
  redMana,
  phyrexianMana,
  whiteMana,
  phyrexianMana,
  greenMana,
];

const useStyles = makeStyles(theme => ({
  icon: {
    width: '20px'
  },
  list: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '300px',
    margin: 'none',
    padding: '0px'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'none',
    padding: '1px'
  },
  selectedPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'none',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '1px',
    padding: '1px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '330px'
  },
  prev: ({ hasLess }) =>  ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '&:hover': {
      cursor: 'pointer'
    },
    visibility: hasLess ? null : 'hidden'
  }),
  next: ({ hasMore }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:hover': {
      cursor: 'pointer'
    },
    visibility: hasMore ? null : 'hidden'
  }),
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

function PageResults({ currentSearch, currentPage, totalPages, displaying, hasMore, hasLess, pageSearch, totalCount }) {
  const classes = useStyles({ hasLess, hasMore });

  const handlePaging = page => {
    pageSearch({ ...currentSearch.searchOptions, page }, currentSearch.searchType);
  };

  let iconIterator = null;
  if(totalPages < manaIcons.length) {
    iconIterator = [...manaIcons];
    iconIterator.length = totalPages;
  } else {
    iconIterator = [...manaIcons];
  }

  return (
    <section className={classes.main}>
      <nav className={classes.nav}>
        <div className={classes.prev}>
          <KeyBoardArrowLeft onClick={() => {
            if(hasLess) handlePaging(currentPage - 1);
          }} />
          <Typography variant="body1" onClick={() => {
            if(hasLess) handlePaging(currentPage - 1);
          }}>
            Previous
          </Typography>
        </div>
        <ul className={classes.list}>
          {
            iconIterator.map((icon, index) => (
              <li key={shortid.generate()} className={classes[currentPage === index + 1 ? 'selectedPage' : 'listItem']} onClick={() => { handlePaging(index + 1); }}>
                <img src={icon} className={classes.icon} />
                <a href="#">{currentPage < 9 ? index + 1 : currentPage - 7 + index}</a>
              </li>
            ))  
          }
        </ul>
        <div className={classes.next} >
          <KeyBoardArrowRight onClick={() => {
            if(hasMore) handlePaging(currentPage + 1);
          }} />
          <Typography variant="body1" onClick={() => {
            if(hasMore) handlePaging(currentPage + 1);
          }}>
            Next
          </Typography>
        </div>
      </nav>
      <Typography variant="body2">Displaying {displaying} of {totalCount}</Typography>
    </section>
  );
}

PageResults.propTypes = {
  currentSearch: PropTypes.shape({
    searchOptions: PropTypes.object,
    searchType: PropTypes.string
  }),
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  displaying: PropTypes.string.isRequired,
  hasMore: PropTypes.bool.isRequired,
  hasLess: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentSearch: getCurrentSearch(state),
  currentPage: parseInt(getSearchCurrentPage(state)),
  totalPages: parseInt(getSearchTotalPages(state)),
  totalCount: getSearchTotalCount(state),
  displaying: getSearchDisplaying(state),
  hasMore: getSearchHasMore(state),
  hasLess: getSearchHasLess(state)
});

const mapDispatchToProps = dispatch => ({
  pageSearch(searchOptions, searchType) {
    if(searchType === 'advanced') dispatch(newAdvancedSearch(searchOptions));
    if(searchType === 'simple') dispatch(newSimpleSearch(searchOptions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageResults);
