import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SearchForm from './search-components/SearchForm';
import TestContainer from '../containers/TestContainer'
export default function App() {
  return (
    <>
      <Header />
      <TestContainer />
    </>
  );
}
