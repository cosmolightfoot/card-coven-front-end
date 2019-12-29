import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { SimpleColors } from '..';
import textFields from '../text/textFields';
import { newSimpleSearch } from '../../../actions/cardSearchActions';
import { resetSimpleForm } from '../../../actions/simpleSearchActions';
import { closeDrawers } from '../../../actions/drawerActions';
import {
  getSimpleBlack,
  getSimpleWhite,
  getSimpleRed,
  getSimpleBlue,
  getSimpleGreen,
  getSimpleText
} from '../../../selectors/simpleFormSelectors';

const useStyles = makeStyles({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  submitButton: {}
});

const textStyles = makeStyles({
  input: {
    width: '50%',
    margin: '40px'
  }
});

function SimpleSearch(props) {
  const {
    black,
    white,
    blue,
    green,
    red,
    text,
    submitSearch,
    closeSearchDrawer,
    resetForm
  } = props;
  const searchOptions = { black, white, blue, green, red, text };
  const { SimpleText } = textFields;

  const handleSubmit = event => {
    event.preventDefault();
    submitSearch(searchOptions);
    setTimeout(() => {
      closeSearchDrawer();
      resetForm();
    }, 350);
  };

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={event => handleSubmit(event)}>
      <SimpleText insertStyles={textStyles} />
      <SimpleColors />
      <Button type="submit" color="primary" size="large" variant="outlined">
        Search
      </Button>
    </form>
  );
}

SimpleSearch.propTypes = {
  black: PropTypes.bool.isRequired,
  white: PropTypes.bool.isRequired,
  blue: PropTypes.bool.isRequired,
  red: PropTypes.bool.isRequired,
  green: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  submitSearch: PropTypes.func.isRequired,
  closeSearchDrawer: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  black: getSimpleBlack(state),
  white: getSimpleWhite(state),
  red: getSimpleRed(state),
  blue: getSimpleBlue(state),
  green: getSimpleGreen(state),
  text: getSimpleText(state)
});

const mapDispatchToProps = dispatch => ({
  submitSearch(searchOptions) {
    dispatch(newSimpleSearch(searchOptions));
  },
  closeSearchDrawer() {
    dispatch(closeDrawers());
  },
  resetForm() {
    dispatch(resetSimpleForm());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSearch);
