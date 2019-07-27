import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import NameField from '../components/search-components/NameField';
import TypesField from '../components/search-components/TypesField';
import TextField from '../components/search-components/TextField';
import BlackMana from '../components/search-components/BlackMana';
export default function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <NameField />
      <TypesField />
      <TextField />
      <BlackMana />
    </section>
  );
}
