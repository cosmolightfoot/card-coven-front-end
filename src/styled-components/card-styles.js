import styled, { css } from 'styled-components';

export const CardWrapper = styled.li`
  border: 3px solid red;
  width: 18%;
  list-style-type: none;

  ${props => props.transform && css`
    
  `};
`;

export const CardImg = styled.img`
  width: 100%;

`;


export const CardGallery = styled.ul`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid blue;
`;


export const CardTitle = styled.h2`
  
`;

