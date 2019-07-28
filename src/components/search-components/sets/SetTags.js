import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import { connect } from 'react-redux';
import { getSets } from '../../../selectors/searchFormSelectors';
import { removeCardSet, pushAvailSet } from '../../../actions/searchFormActions';

class SetTags extends PureComponent {
  static propTypes = {
    sets: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
  }
  render() {
    return (
      <Tags options={this.props.sets} handleDelete={this.props.handleDelete} />
    );
  }
}

const mapStateToProps = state => ({
  sets: getSets(state)
});

const mapDispatchToProps = dispatch => ({
  handleDelete(set) {
    dispatch(removeCardSet(set));
    // dispatch(pushAvailSet(set));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTags);
