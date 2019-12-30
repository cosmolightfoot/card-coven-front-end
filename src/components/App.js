import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../styling/themes';
import { Header, SearchPage } from './';
import Sidebar from './sidebar-components/SideBar';
import About from './About';
import AppWrapper from './AppWrapper';
import CardDetails from '../containers/detail-containers/CardDetails';
import { getSetNames } from '../selectors/assortedDataSelectors';
import { retrieveSetNames } from '../actions/assortedDataActions';

function App({ setNames, updateSetNames }) {

  useEffect(() => {
    updateSetNames(); 
  }, []);

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Sidebar />
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/about" component={About} />
            <Route path="/:id" component={CardDetails} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = state => ({
  setNames: getSetNames(state)
});

const mapDispatchToProps = dispatch => ({
  updateSetNames() {
    console.log('SUSAN');
    dispatch(retrieveSetNames());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
