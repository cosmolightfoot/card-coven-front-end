import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if(this.state.error) {
      return (<h3>Error!</h3>);
    }

    return this.props.children;
  }
}

