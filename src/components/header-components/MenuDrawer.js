import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import { DrawerNav } from './';

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

function MenuDrawer() {
  const classes = useStyles();
  const [drawerState, setDrawer] = React.useState(false);

  const toggleDrawer = open => event => {
    if(
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawer(open);
  };


  return (
    <>
      <IconButton className={classes.button}
        onClick={toggleDrawer(true)}
      >
        <Menu className={classes.icon} fontSize="large" />
      </IconButton>
      <Drawer
        open={drawerState}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
      >
        <DrawerNav />
      </Drawer>
    </>
  );
}

export default MenuDrawer;
