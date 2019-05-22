import React from 'react';
import PropTypes from 'prop-types';

function Card({ cardData }) {
  const {
    name,
    imageUrl,
    manaCost,
    cmc,
    colors,
    rarity,
    power,
    toughness,
    text,
    flavor,
    types,
    subtypes,
    setName
  } = cardData;

  //write function that sets cards background color based on color identity
  
  
  return (
    <li>
      <img src={imageUrl} />
      <h2>{name}</h2>
      <p>{text}</p>
      <p>{flavor}</p>
      <table>
        <tbody>
          <tr>
            <th>Types:</th>
            <td>{types}</td>
            <th>Set:</th>
            <td>{setName}</td>
            <th>Cost:</th>
            <td className="card-cost">{manaCost}</td>
            <th>Rarity:</th>
            <td>{rarity}</td>
          </tr>
          <tr>
            <th>Subtypes:</th>
            <td>{subtypes}</td>
            <th>Color:</th>
            <td>{colors}</td>
            <th>CMC:</th>
            <td>{cmc}</td>
            <th>Power/Toughness:</th>
            <td>{power}/{toughness}</td>
          </tr>
        </tbody>    
      </table>
      
    </li>
  );

}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    cmc: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    rarity: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    toughness: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    subtypes: PropTypes.array.isRequired,
    manaCost: PropTypes.string.isRequired,
    setName: PropTypes.string.isRequired
  }).isRequired 
};

export default Card;
