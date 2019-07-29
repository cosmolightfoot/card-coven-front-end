import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SearchContainer from '../containers/search-containers/SearchContainer';
export default function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <SearchContainer />
    </main>
  );
}
