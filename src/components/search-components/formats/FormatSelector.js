import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaPlusSquare } from 'react-icons/fa';
import availGameFormats from '../../../data/formatData';
import { getSelectedFormat } from '../../../selectors/searchFormSelectors';
import { selectFormat } from '../../../actions/searchFormActions';

class FormatSelector extends PureComponent {
  static propTypes = {
    selectedFormat: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePush: PropTypes.func.isRequired
  }

  render() {
    const formatsList = availGameFormats.map((format, i) => (
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
  selectedFormat: getSelectedFormat(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(selectFormat(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormatSelector);
