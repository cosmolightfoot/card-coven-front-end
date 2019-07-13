import React from 'react';
import PropTypes from 'prop-types';
import { FaSortDown } from 'react-icons/fa';
import { sortArrow } from '../../assets/caret-down.svg';

function FormHeader({ title, toggleHidden, isHidden }) {
  return (
    <header style={{ 
      display: 'flex',
      height: '25px', 
      marginBottom: '5px', 
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'none', 
    }}>
      <svg 
        width="25" 
        height="25" 
        style={{
          transform: `rotate(${isHidden ? '-90' : '0'}deg)`
        }} 
        viewBox="0 0 2048 2048" 
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleHidden}
      >
        <path d="M1536 832q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/>
      </svg>
      <h3>{title}:</h3>
    </header>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
};

export default FormHeader;
