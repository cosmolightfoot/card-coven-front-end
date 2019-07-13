import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';

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
        <main>
          <input value={cardName} name="cardName" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }}></input>
        </main>
      </section>
    );
  }
}

export default CardName;
