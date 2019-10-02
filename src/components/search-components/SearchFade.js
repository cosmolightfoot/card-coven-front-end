// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { headerHeight, sidebarWidth } from '../../styling/styling-vars';
import { SearchTabs } from './';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: 'flex'
  },
  paper: {
    position: 'fixed',
    top: `${headerHeight}px`,
    left: `${sidebarWidth}px`,
    width: `calc(100% - ${sidebarWidth}px - 10%)`,
    borderRadius: 0
    // margin: theme.spacing(1)
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

function SearchFade() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Fade in={true}>
          <Paper elevation={4} className={classes.paper}>
            <SearchTabs />
          </Paper>
        </Fade>
      </div>
    </div>
  );
}

export default SearchFade;
