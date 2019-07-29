import styled, { css } from 'styled-components';

export const FormSectionTitle = styled.h4`
    @import url('https://fonts.googleapis.com/css?family=Rokkitt&display=swap');
    font-size: 22px;
    height: 10px;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 12px;
    font-family: 'Rokkitt', serif;
`; 

export const TextSearch = styled.input`
  width: 275px;
  height: 20px;
  margin: 5px;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid blue;
  padding: 5px;
  width: ${({ width }) => width ? width : '360px'};
  height: ${({ height }) => height ? height : '120px'};
`;

export const CheckBoxSection = styled.div`
  display: flex;
  align-items: center; 
  margin: 0px; 
  height: 25px; 
`;

export const TagList = styled.ul`
  border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  width: 315px;
  height: 100px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const FormTag = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rokkitt', serif;
  font-size: 20px;
  margin: 3px;
  border: 2px solid black;
  height: 18px;
  width: ${({ width }) => width ? width : null };
  padding: 3px;
  border-radius: 2px;

`;
