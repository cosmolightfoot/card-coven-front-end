import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CardImg, CardWrapper, CardTitle } from '../../styled-components/card-styles';

class TransformCard extends PureComponent {
  static propTypes = {
    card: PropTypes.object.isRequired
  }
  
  state = {
    transformed: false
  }
  
  render() {
    const { card_faces } = this.props.card;

    return (

      <CardWrapper>
        <CardTitle>{card_faces[0].name}</CardTitle>
        <CardImg src={card_faces[0].image_uris.normal} />
      </CardWrapper>
    );
  }
}

export default TransformCard;
