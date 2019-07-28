import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaWindowClose } from 'react-icons/fa';
import FormHeader from './FormHeader';
import SetsField from './SetsField';

class CardSets extends PureComponent {
  static propTypes = {
    sets: PropTypes.array.isRequired,
    selectedSet: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSetPush: PropTypes.func.isRequired,
    handleSetDelete: PropTypes.func.isRequired,
    availSets: PropTypes.array.isRequired
  }

  state = {
    isHidden: true
  }

  toggleHidden = () => {
    this.setState(state => {
      if(state.isHidden) return { isHidden: false };
      else return { isHidden: true };
    });
  }

  render() {
    const { sets, selectedSet, handleChange, handleSetPush, handleSetDelete, availSets } = this.props;
    return (
      <section style={{ backgroundColor: 'rgb(180, 180, 255)', padding: '5px' }}>
        <FormHeader title="Sets" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : <SetsField sets={sets} selectedSet={selectedSet} handleChange={handleChange} handleSetPush={handleSetPush} handleSetDelete={handleSetDelete} availSets={availSets} />}
      </section>
    );
  }
}

export default CardSets;
