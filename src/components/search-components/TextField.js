import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  getTypeLine, getCardText } from '../../selectors/searchFormSelectors';
import {  changeTypeLine, changeText } from '../../actions/searchFormActions';

class TextField extends PureComponent {
  static propTypes = {
    cardText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <main>
        <input value={this.props.cardText} placeholder="Search by Card Text" onChange={this.props.handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }}></input>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  typeLine: getCardText(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(changeText(target.value));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField);
