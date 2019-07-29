import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardName } from '../../../selectors/searchFormSelectors';
import { changeName } from '../../../actions/searchFormActions';
import { TextSearch } from '../../../styled-components/search-form-styles';

class NameField extends PureComponent {
  static propTypes = {
    cardName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <TextSearch value={this.props.cardName} placeholder="Search by Card Name" name="cardName" onChange={this.props.handleChange}></TextSearch>
    );
  }
}

const mapStateToProps = state => ({
  cardName: getCardName(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(changeName(target.value));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameField);
