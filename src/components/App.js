import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import NameField from '../components/search-components/NameField';
import TypesField from '../components/search-components/TypesField';
import TextField from '../components/search-components/TextField';
import BlackMana from '../components/search-components/colors/BlackMana';
import WhiteMana from '../components/search-components/colors/WhiteMana';
import RedMana from './search-components/colors/RedMana';
import GreenMana from './search-components/colors/GreenMana';
import BlueMana from './search-components/colors/BlueMana';
import MatchExact from './search-components/colors/MatchExact';
import ExcludeUnselected from './search-components/colors/ExcludeUnselected';
import FormatSelector from './search-components/formats/FormatSelector';
import FormatTags from './search-components/formats/FormatTags';

export default function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <NameField />
      <TypesField />
      <TextField />
      <BlackMana />
      <WhiteMana />
      <RedMana />
      <GreenMana />
      <BlueMana />
      <MatchExact />
      <ExcludeUnselected />
      <FormatTags />
      <FormatSelector />
    </section>
  );
}
