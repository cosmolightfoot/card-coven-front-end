import styled, { css } from 'styled-components';

export const CardWrapper = styled.li`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 18%;
  height: 400px;
  list-style-type: none;
  margin: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  ${props => props.transform && css`
    
  `};
`;

export const CardImg = styled.img`
  width: 90%;
  border-radius: 14px;
`;


export const GalleryWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

export const CardGallery = styled.ul`
  border: 3px solid black;
  width: 95%;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
`;



export const CardTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Aclonica|Condiment|Economica|Fanwood+Text|Julius+Sans+One|Macondo+Swash+Caps|PT+Serif+Caption|Staatliches|Yatra+One&display=swap');
  font-family: 'Macondo Swash Caps', cursive;
  margin: 5px 0px 0px 0px;
`;

// font-family: 'Economica', sans-serif;
// font-family: 'Staatliches', cursive;
// font-family: 'Julius Sans One', sans-serif;
// font-family: 'PT Serif Caption', serif;
// font-family: 'Aclonica', sans-serif;
// font-family: 'Fanwood Text', serif;
// font-family: 'Yatra One', cursive;
// font-family: 'Condiment', cursive;
// font-family: 'Macondo Swash Caps', cursive;
