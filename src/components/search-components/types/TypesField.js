import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTypeLine } from '../../../selectors/searchFormSelectors';
import { changeTypeLine } from '../../../actions/searchFormActions';
import { TextSearch } from '../../../styled-components/search-form-styles';

class TypesField extends PureComponent {
  static propTypes = {
    typeLine: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <TextSearch value={this.props.typeLine} placeholder="Search by Card Type or Subtype" name="cardName" onChange={this.props.handleChange} />
    );
  }
}

const mapStateToProps = state => ({
  typeLine: getTypeLine(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(changeTypeLine(target.value));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypesField);
