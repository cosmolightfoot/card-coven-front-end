import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { getNavMenuDrawerState } from '../../selectors/drawerSelectors';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';

import { DrawerNav } from './';
import { openNavMenuDrawer, closeDrawers } from '../../actions/drawerActions';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: '40px',
    color: theme.palette.primary.contrastText
  },
  button: {
    margin: '10px'
  },
  drawer: {
    width: '300px'
  }
}));

function MenuDrawer(props) {
  const { navMenu, openNav, closeNav } = props;
  const classes = useStyles();

  const toggleDrawer = () => event => {
    if(
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    openNav();
  };


  return (
    <>
      <IconButton className={classes.button}
        onClick={toggleDrawer()}
      >
        <Menu className={classes.icon} fontSize="large" />
      </IconButton>
      <Drawer
        open={navMenu}
        onClose={closeNav}
        className={classes.drawer}
      >
        <DrawerNav />
      </Drawer>
    </>
  );
}

const mapStateToProps = state => ({
  navMenu: getNavMenuDrawerState(state)
});

const mapDispatchToProps = dispatch => ({
  openNav() {
    dispatch(openNavMenuDrawer());
  },
  closeNav() {
    dispatch(closeDrawers());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDrawer);
