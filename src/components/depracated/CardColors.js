import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import ColorsField from './ColorsField';


class CardColors extends PureComponent {
  static propTypes = {
    cardColors: PropTypes.shape({
      black: PropTypes.bool.isRequired,
      white: PropTypes.bool.isRequired,
      green: PropTypes.bool.isRequired,
      red: PropTypes.bool.isRequired,
      blue: PropTypes.bool.isRequired,
    }).isRequired,
    exclude: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    colorIdentity: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired
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
    const { cardColors, exact, exclude, colorIdentity, handleCheckboxChange } = this.props;
    return (
      <section  style={{ backgroundColor: 'oldlace', padding: '5px' }}>
        <FormHeader title="Colors" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : <ColorsField cardColors={cardColors} exact={exact} exclude={exclude} handleCheckboxChange={handleCheckboxChange} colorIdentity={colorIdentity} />}
      </section>
    );
  }
}


export default CardColors;
