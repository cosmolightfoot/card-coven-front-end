import React from 'react';
import { MainHeader, MainLogo, MainNav } from '../styled-components/header-styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <MainHeader>
      <MainLogo>CardCoven</MainLogo>
      <MainNav>
        <Link to="/" style={{ padding: '8px' }}>Cards</Link>
        <Link to="/about">About</Link>
      </MainNav>
    </MainHeader>
  );
}
