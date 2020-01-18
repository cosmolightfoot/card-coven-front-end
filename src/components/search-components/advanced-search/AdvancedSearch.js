import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import textFields from '../text/textFields';
import SetSelect from '../selects/SetSelect';
import AdvancedColors from './AdvancedColors';
import FormatSelect from '../formats/FormatSelect';
import { getSearchFormState } from '../../../selectors/searchFormSelectors';
import { newAdvancedSearch } from '../../../actions/cardSearchActions';
import { closeDrawers } from '../../../actions/drawerActions';
import { resetSearch } from '../../../actions/searchFormActions';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%',
    height: '100%',
    minHeight: '380px',
    margin: '0px'
  },
  middleColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    minHeight: '380px'
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    minHeight: '380px',
  },
  button: {
    margin: theme.spacing(3)
  }

}));

const textStyles = makeStyles(theme => ({
  input: {
    width: '100%',
    marginBottom: theme.spacing(3)
  }
}));

function AdvancedSearch({ searchOptions, submitSearch, resetForm, closeSearchDrawer }) {
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    submitSearch(searchOptions);
    setTimeout(() => {
      closeSearchDrawer();
      resetForm();
    }, 350);
  };

  const { CardTypeLine, CardName, CardText } = textFields;
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <section className={classes.leftColumn}>
        <CardTypeLine insertStyles={textStyles} />
        <SetSelect />
      </section>
      <section className={classes.middleColumn}>
        <CardName insertStyles={textStyles} />
        <AdvancedColors />
        <Button type="submit" color="primary" size="large" variant="outlined" className={classes.button}>
          Search
        </Button>
      </section>
      <section className={classes.rightColumn}>
        <CardText insertStyles={textStyles} />
        <FormatSelect />
      </section>
    </form>
  );
}

AdvancedSearch.propTypes = {
  searchOptions: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    typeLine: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    black: PropTypes.bool.isRequired,
    white: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    green: PropTypes.bool.isRequired,
    blue: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    exclude: PropTypes.bool.isRequired,
    selectedFormats: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedSets: PropTypes.arrayOf(PropTypes.string).isRequired,
    availSortFilters: PropTypes.array,
    selectedFilter: PropTypes.string,
    sortDirection: PropTypes.string,
    sortFilters: PropTypes.array
  }).isRequired,
  resetForm: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
  closeSearchDrawer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchOptions: getSearchFormState(state)
});

const mapDispatchToProps = dispatch => ({
  submitSearch(searchOptions) {
    dispatch(newAdvancedSearch(searchOptions));
  },
  closeSearchDrawer() {
    dispatch(closeDrawers());
  },
  resetForm() {
    dispatch(resetSearch());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);
