import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../styling/themes';
import { Header, Sidebar } from './';
import SearchContainer from '../containers/search-containers/SearchContainer';
import About from './About';
import AppWrapper from './AppWrapper';
import CardDetails from '../containers/detail-containers/CardDetails';
export default function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Sidebar />
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={SearchContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/about" component={About} />
            <Route path="/:id" component={CardDetails} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}
