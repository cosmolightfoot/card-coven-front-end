import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaPlusSquare } from 'react-icons/fa';
import formatData from '../../../data/formatData';
import { getSelectedFormat, getAvailGameFormats } from '../../../selectors/searchFormSelectors';
import { selectFormat, initAvailFormats, pushFormat, removeAvailFormat } from '../../../actions/searchFormActions';

class FormatSelector extends PureComponent {
  static propTypes = {
    loadFormats: PropTypes.func.isRequired,
    availGameFormats: PropTypes.array.isRequired,
    selectedFormat: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePush: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadFormats(formatData);
  }

  render() {
    const formatsList = this.props.availGameFormats.map((format, i) => (
      <option key={i} value={format}>{format}</option>
    ));
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select value={this.props.selectedFormat} name="selectedFormat" onChange={this.props.handleChange}>
          <option value="">--Filter By Format--</option>
          {formatsList}
        </select>
        <FaPlusSquare name="formats" size="23" onClick={this.props.handlePush} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availGameFormats: getAvailGameFormats(state),
  selectedFormat: getSelectedFormat(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(selectFormat(target.value));
  },
  loadFormats(array) {
    dispatch(initAvailFormats(array));
  },
  handlePush() {
    console.log('TRUE');
    dispatch(pushFormat());
    dispatch(removeAvailFormat());
    dispatch(selectFormat(''));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormatSelector);
