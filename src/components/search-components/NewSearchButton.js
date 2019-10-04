import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { openSearchDrawer } from '../../actions/drawerActions';

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    bottom: '80px',
    right: '5vw',
    borderRadius: '100%',
    width: '70px',
    height: '70px', 
    zIndex: '13'
  },
  icon: {
    fontSize: '40px'
  }
});

function NewSearchButton({ newSearch }) {
  const classes = useStyles();
  return (
    <Button className={classes.button} color="secondary" variant="contained" onClick={newSearch}>
      <Add className={classes.icon} />
    </Button>
  );
}

NewSearchButton.propTypes = {
  newSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  newSearch() {
    dispatch(openSearchDrawer());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewSearchButton);
