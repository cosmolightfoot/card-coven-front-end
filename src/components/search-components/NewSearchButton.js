import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Add from '@material-ui/icons/Add';
import { openSearchDrawer } from '../../actions/drawerActions';

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    bottom: '80px',
    right: '120px',
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

const mapDispatchToProps = dispatch => ({
  newSearch() {
    dispatch(openSearchDrawer());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewSearchButton);
