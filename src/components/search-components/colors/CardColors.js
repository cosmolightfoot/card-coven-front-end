import React from 'react';
import PropTypes from 'prop-types';
import BlackMana from './BlackMana';
import WhiteMana from './WhiteMana';
import RedMana from './RedMana';
import GreenMana from './GreenMana';
import BlueMana from './BlueMana';
import MatchExact from './MatchExact';
import ExcludeUnselected from './ExcludeUnselected';
import { FormSectionTitle } from '../../../styled-components/search-form-styles';
import { FormSection } from '../../../styled-components/search-form-styles';

function CardColors() {
  const colorsStyle = { 
    display: 'flex',
    justifyContent: 'space-between',
    width: '350px'
  };
  const optionsStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <FormSection className="colors-section">
      <FormSectionTitle>Colors:</FormSectionTitle>
      <div className="mana-boxes" style={colorsStyle}>
        <BlackMana />
        <WhiteMana />
        <RedMana />
        <GreenMana />
        <BlueMana />
      </div>
      <div style={optionsStyle}>
        <MatchExact />
        <ExcludeUnselected />
      </div>
    </FormSection>
  );
}

export default CardColors;
