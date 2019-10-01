import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../styling/themes';
import { Header } from './';
import SearchContainer from '../containers/search-containers/SearchContainer';
import About from './About';
import CardDetails from '../containers/detail-containers/CardDetails';
export default function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route path="/:id" component={CardDetails} />
          <Route exact path="/about" component={About} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
