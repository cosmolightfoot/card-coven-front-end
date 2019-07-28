import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaPlusSquare } from 'react-icons/fa';
import setsData from '../../../data/setData';
import { getAvailSets, getSelectedSet } from '../../../selectors/searchFormSelectors';
import { initAvailSets, selectCardSet, pushCardSet, removeAvailSet } from '../../../actions/searchFormActions';

class FormatSelector extends PureComponent {
  static propTypes = {
    loadSets: PropTypes.func.isRequired,
    availSets: PropTypes.array.isRequired,
    selectedSet: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePush: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadSets(setsData);
  }

  render() {
    const setsList = this.props.availSets.map((set, i) => (
      <option key={i} value={set}>{set}</option>
    ));
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select value={this.props.selectedSet} name="selectedSet" onChange={this.props.handleChange}>
          <option value="">--Filter By Set--</option>
          {setsList}
        </select>
        <FaPlusSquare name="sets" size="23" onClick={this.props.handlePush} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availSets: getAvailSets(state),
  selectedSet: getSelectedSet(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(selectCardSet(target.value));
  },
  loadSets(array) {
    dispatch(initAvailSets(array));
  },
  handlePush() {
    dispatch(pushCardSet());
    dispatch(removeAvailSet());
    dispatch(selectCardSet(''));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormatSelector);
