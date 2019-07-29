import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SearchForm from '../containers/search-containers/SearchForm';
export default function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <SearchForm />
    </main>
  );
}
