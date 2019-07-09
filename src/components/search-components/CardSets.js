import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaWindowClose } from 'react-icons/fa';

function CardSets({ sets, selectedSet, handleChange, handleSetPush, handleSetDelete, availSets }) {
  const setsList = availSets.map((set, i) => (
    <option key={i} value={set}>{set}</option>
  ));
  const taggedSetsList = sets.map((set, i) => (
    <li key={i} style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '15%', height: '20px', padding: '3px' }}>
      <h5>{set}</h5>
      <FaWindowClose size="15" onClick={() => handleSetDelete(set)} />
    </li>
  ));
  
  return (
    <section style={{ backgroundColor: 'rgb(180, 180, 255)', padding: '5px' }}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}/>
        <h3>Sets:</h3>
      </header>
      <main>
        <ul style={{ display: 'flex', flexWrap: 'wrap', width: '93%' }}>
          {taggedSetsList}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select value={selectedSet} name="selectedSet" onChange={handleChange}>
            <option value="">--Filter By Set--</option>
            {setsList}
          </select>
          <FaPlusSquare name="sets" size="23" onClick={handleSetPush} />
        </div>
      </main>
    </section>
  );
}

CardSets.propTypes = {
  sets: PropTypes.array.isRequired,
  selectedSet: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSetPush: PropTypes.func.isRequired,
  handleSetDelete: PropTypes.func.isRequired,
  availSets: PropTypes.array.isRequired
};

export default CardSets;
