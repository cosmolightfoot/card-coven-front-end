import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import TextField from './TextField';

class CardText extends PureComponent {
  static propTypes = {
    cardText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired  
  }

  state = {
    isHidden: false
  }

  toggleHidden = () => {
    this.setState(state => {
      if(state.isHidden) return { isHidden: false };
      else return { isHidden: true };
    });
  }

  render() {
    const { cardText, handleChange } = this.props;
    return (
      <section style={{ backgroundColor: 'oldlace', padding: '5px' }}>
        <FormHeader title="Text" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        {this.state.isHidden ? null : <TextField cardText={cardText} handleChange={handleChange} />}
      </section>
    );
  }
}

export default CardText;
