import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Card from './search-components/Card';
import Cards from './search-components/Cards';
import cardListData from '../../data/cardListData';
import cardData from '../../data/cardData';

export default function App() {
  return (
    <>
    <Header />
    <Cards cardListData={cardListData.cards} /> 
    </>
  );
}
