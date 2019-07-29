import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormatTagList from './FormatTagList';
import { connect } from 'react-redux';
import { getFormats } from '../../../selectors/searchFormSelectors';
import { removeCardFormat, pushAvailFormat } from '../../../actions/searchFormActions';

class FormatTags extends PureComponent {
  static propTypes = {
    formats: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
  }
  render() {
    return (
      <FormatTagList options={this.props.formats} handleDelete={this.props.handleDelete} />
    );
  }
}

const mapStateToProps = state => ({
  formats: getFormats(state)
});

const mapDispatchToProps = dispatch => ({
  handleDelete(format) {
    dispatch(removeCardFormat(format));
    dispatch(pushAvailFormat(format));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormatTags);
