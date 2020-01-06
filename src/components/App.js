import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { getSetNames, getGameFormats } from '../selectors/assortedDataSelectors';
import { retrieveSetNames, initializeFormats } from '../actions/assortedDataActions';
import formatData from '../data/formatData';

function App({ updateSetNames, updateGameFormats }) {

  useEffect(() => {
    updateSetNames(); 
    updateGameFormats(formatData);
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

App.propTypes = {
  updateSetNames: PropTypes.func.isRequired,
  updateGameFormats: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  setNames: getSetNames(state),
  gameFormats: getGameFormats(state)
});

const mapDispatchToProps = dispatch => ({
  updateSetNames() {
    dispatch(retrieveSetNames());
  },
  updateGameFormats(data) {
    dispatch(initializeFormats(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
