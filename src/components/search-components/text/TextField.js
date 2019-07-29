import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardText } from '../../../selectors/searchFormSelectors';
import { changeText } from '../../../actions/searchFormActions';
import { TextSearch } from '../../../styled-components/search-form-styles';

class TextField extends PureComponent {
  static propTypes = {
    cardText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <TextSearch value={this.props.cardText} placeholder="Search by Card Text" onChange={this.props.handleChange} />
    );
  }
}

const mapStateToProps = state => ({
  cardText: getCardText(state)
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
