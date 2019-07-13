import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import NameField from './NameField';

class CardName extends PureComponent {
  static propTypes = {
    cardName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
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
    const { cardName, handleChange } = this.props;
    return (
      <section style={{ backgroundColor: 'pink', padding: '5px' }}>
        <FormHeader title="Name" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : <NameField cardName={cardName} handleChange={handleChange} />}
      </section>
    );
  }
}

export default CardName;
