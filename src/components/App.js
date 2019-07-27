import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SearchContainer from '../containers/search-containers/SearchContainer';
import NameField from '../components/search-components/NameField';
// import SearchForm from '../containers/search-containers/SearchForm';
export default function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <NameField />
    </section>
  );
}
