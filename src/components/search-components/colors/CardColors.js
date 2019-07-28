import React from 'react';
import PropTypes from 'prop-types';
import BlackMana from './BlackMana';
import WhiteMana from './WhiteMana';
import RedMana from './RedMana';
import GreenMana from './GreenMana';
import BlueMana from './BlueMana';
import MatchExact from './MatchExact';
import ExcludeUnselected from './ExcludeUnselected';

function CardColors() {
  const sectionStyle = {
    border: '3px solid blue',
    padding: '5px',
    width: '360px'
  };
  const titleStyle = {
    height: '10px',
    margin: '10px',
    marginTop: '0px',
    marginLeft: '0px'
  };
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
    <section className="colors-section" style={sectionStyle}>
      <h4 style={titleStyle}>Colors:</h4>
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
    </section>
  );
}

export default CardColors;
