import React from 'react';
import PropTypes from 'prop-types';

function Sorceries({ cardData }) {
  const {
    name,
    imageUrl,
    manaCost,
    cmc,
    colors,
    rarity,
    text,
    flavor,
    types,
    setName
  } = cardData;

  //write function that sets cards background color based on color identity
  
  
  return (
    <li>
      <img src={imageUrl} />
      <h2>{name}</h2>
      <p>{text}</p>
      <p>{flavor  || 'No flavor text available'}</p>
      <table>
        <tbody>
          <tr>
            <th>Types:</th>
            <td>{types}</td>
            <th>Set:</th>
            <td>{setName}</td>
            <th>Cost:</th>
            <td className="card-cost">{manaCost}</td>
          </tr>
          <tr>
            <th>Rarity:</th>
            <td>{rarity}</td>
            <th>Color:</th>
            <td>{colors}</td>
            <th>CMC:</th>
            <td>{cmc}</td>
          </tr>
        </tbody>    
      </table>
    </li>
  );

}

Sorceries.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    cmc: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    rarity: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    flavor: PropTypes.string,
    types: PropTypes.array.isRequired,
    manaCost: PropTypes.string.isRequired,
    setName: PropTypes.string.isRequired
  }).isRequired 
};

export default Sorceries;
