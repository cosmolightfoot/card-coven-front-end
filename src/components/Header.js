import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MainHeader, MainLogo, MainNav } from '../styled-components/header-styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  header: {
    // color: theme.palette.secondary.dark
    padding: theme.spacing(2)
  },
  cardCoven: {
    [theme.breakpoints.down('xs')]: {
      color: 'white'
    },
    [theme.breakpoints.up('sm')]: {
      color: 'green'
    },
    [theme.breakpoints.up('md')]: {
      color: 'yellow'
    },
    [theme.breakpoints.up('lg')]: {
      color: 'pink'
    },
    [theme.breakpoints.up('xl')]: {
      color: 'orange'
    },
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} color="primary" position="static">
      <Typography className={classes.cardCoven} variant="h2">Card Coven</Typography>
      <MainNav>
        <Link to="/" style={{ padding: '8px' }}>Cards</Link>
        <Link to="/decks" style={{ padding: '8px' }}>Decks</Link>
        <Link to="/synergies" style={{ padding: '8px' }}>Synergies</Link>
        <Link to="/" style={{ padding: '8px' }}>Cards</Link>
        {/* <Link to="/about">About</Link> */}
      </MainNav>
    </AppBar>
  );
}
