import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaWindowClose } from 'react-icons/fa';
import FormHeader from './FormHeader';
import FormatsField from './FormatsField';

class CardFormats extends PureComponent {
  static propTypes = {
    formats: PropTypes.array.isRequired,
    selectedFormat: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFormatPush: PropTypes.func.isRequired,
    handleFormatDelete: PropTypes.func.isRequired,
    availGameFormats: PropTypes.array.isRequired
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
    const { formats, selectedFormat, handleChange, handleFormatPush, handleFormatDelete, availGameFormats } = this.props;
    return (
      <section style={{ backgroundColor: 'pink', padding: '5px' }}>
        <FormHeader title="Formats" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : <FormatsField formats={formats} selectedFormat={selectedFormat} handleChange={handleChange} handleFormatPush={handleFormatPush} handleFormatDelete={handleFormatDelete} availGameFormats={availGameFormats} />}
      </section>
    );
  }
}

export default CardFormats;
