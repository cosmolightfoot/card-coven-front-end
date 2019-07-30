import styled, { css } from 'styled-components';

export const MainHeader = styled.header`
  align-self: stretch;
  display: flex;
  justify-content: space-between; 
  width: 101vw;
  height: 80px;
  position: relative;
  top: -10px;
  left: -10px;
  background-color: red;
`;

export const MainLogo = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Aclonica|Condiment|Economica|Fanwood+Text|Julius+Sans+One|Macondo+Swash+Caps|PT+Serif+Caption|Staatliches|Yatra+One&display=swap');
  /* font-family: 'Economica', sans-serif; */
  /* font-family: 'Staatliches', cursive; */
  font-family: 'Julius Sans One', sans-serif;
  /* font-family: 'PT Serif Caption', serif; */
  /* font-family: 'Aclonica', sans-serif; */
  /* font-family: 'Fanwood Text', serif; */
  /* font-family: 'Yatra One', cursive; */
  /* font-family: 'Condiment', cursive; */
  /* font-family: 'Macondo Swash Caps', cursive; */
  font-size: 3em;
  margin: 10px 0 0 0;
  margin-left: 0.5vw;
`;

export const MainNav = styled.nav`
  font-family: 'Julius Sans One', sans-serif;
  margin: 0px 1.7vw 3px 0vw;
  align-self: flex-end;
`;



