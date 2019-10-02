import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { sidebarWidth, headerHeight } from '../styling/styling-vars';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      width: `calc(100% - ${sidebarWidth}px)`,
      left: `${sidebarWidth}px`,
      top: `${headerHeight}px`
    }
  }
}));

function AppWrapper({ children }) {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
}

AppWrapper.propTypes = {
  children: PropTypes.node
};

export default AppWrapper;
