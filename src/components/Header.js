import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { MainHeader, MainLogo, MainNav } from '../styled-components/header-styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar color="primary" position="static">
      <Typography variant="h2">Card Coven</Typography>
      <MainNav>
        <Link to="/" style={{ padding: '8px' }}>Cards</Link>
        <Link to="/about">About</Link>
      </MainNav>
    </AppBar>
  );
}
