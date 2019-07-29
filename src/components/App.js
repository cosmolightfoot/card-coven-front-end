import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import CardName from './search-components/name/CardName';
import CardColors from './search-components/colors/CardColors';
import CardType from './search-components/types/CardTypes';
import CardText from './search-components/text/CardText';
import CardFormats from './search-components/formats/CardFormats';
import CardSets from './search-components/sets/CardSets';
import CardSort from './search-components/sort/CardSort';
export default function App() {
  return (
    <main>
      <Header />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <section style={{ display: 'flex' }}>
          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <CardName />
            <CardColors />
          </section>
          <section>
            <CardType />
            <CardText />
            <CardFormats />
          </section>
          <section>
            <CardSets />
          </section>
        </section>
        <CardSort />
      </section>
    </main>
  );
}
