import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LayoutField from './LayoutField';
import FormHeader from './FormHeader';

class CardLayout extends PureComponent {
  static propTypes = {
    availLayouts: PropTypes.array.isRequired,
    layout: PropTypes.string.isRequired,
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
    const { layout, availLayouts, handleChange } = this.props;
    return (
      <section style={{ backgroundColor: 'pink', padding: '5px' }}>
        <FormHeader title="Layout" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        {this.state.isHidden ? null : <LayoutField layout={layout} availLayouts={availLayouts} handleChange={handleChange} /> }
      </section>
    );
  }
}

export default CardLayout;
