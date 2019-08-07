import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SearchContainer from '../containers/search-containers/SearchContainer';
import About from './About';
import CardDetails from '../containers/detail-containers/CardDetails';
export default function App() {
  return (
    <Router>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '98vw' }}>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route path="/:id" component={CardDetails} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </Router>
  );
}
