import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import TypesField from './TypesField';


class CardTypes extends PureComponent {
  static propTypes = {
    typeLine: PropTypes.string.isRequired,
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
    const { typeLine, handleChange } = this.props;
    return (
      <section style={{ backgroundColor: 'rgb(200, 200, 255)', padding: '5px' }}>
        <FormHeader title="Types" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : <TypesField typeLine={typeLine} handleChange={handleChange} /> }
      </section>
    );
  }
}

export default CardTypes;
