import React from 'react';
import { MainHeader, MainLogo, MainNav } from '../styled-components/header-styles';
// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <MainHeader>
      <MainLogo>CardCoven</MainLogo>
      <MainNav>
        <a style={{ padding: '5px' }}>Cards</a>
        <a>About</a>
      </MainNav>
    </MainHeader>
  );
}
