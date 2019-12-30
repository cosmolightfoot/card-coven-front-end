import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar, UserAvatar, MenuDrawer } from './index';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { headerHeight } from '../../styling/styling-vars';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    height: `${headerHeight}px`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: theme.zIndex.drawer + 1
  },
  cardCoven: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
    },
    flexGrow: 1
    // border: '3px solid red'
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const downMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar className={classes.header} position="static">
      <MenuDrawer />
      <Typography className={classes.cardCoven} align={'left'} variant="h2">
        Card Coven
      </Typography>
      <SearchBar />
      <UserAvatar />
    </AppBar>
  );
}
