import styled from 'styled-components';

export const PagingNav = styled.nav`
  @import url('https://fonts.googleapis.com/css?family=Aclonica|Condiment|Economica|Fanwood+Text|Julius+Sans+One|Macondo+Swash+Caps|PT+Serif+Caption|Staatliches|Yatra+One&display=swap');
  width: 100%;
  height: 60px;
  border-bottom: 4px solid #707070;
  background-color: oldlace;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: -webkit-sticky;
  position: sticky;
  top: 0px; */
`;

export const PagingButton = styled.button`
  height: 50px;
  width: 50px;
  background: none;
  border: none;
  font-family: 'Rokkitt', serif;
  font-size: 40px;
  :focus {
    outline: none !important;
  }
  :hover {
    cursor: pointer;
  }
`;

export const DisplayP = styled.p`
  font-family: 'Rokkitt', serif;
`;
