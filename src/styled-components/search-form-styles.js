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

export const SearchMain = styled.main`
  background-color: oldlace;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 10px solid black;
`;

export const SearchFormStyle = styled.form`
  background-color: oldlace;
  align-self: center;
`;

export const TextSearch = styled.input`
  width: 275px;
  height: 20px;
  margin: 5px;
  :focus {
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 3px #719ECE;
}
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  width: ${({ width }) => width ? width : '360px'};
  height: ${({ height }) => height ? height : '120px'};
`;

export const CheckBoxSection = styled.div`
  display: flex;
  align-items: center;
  font-family: Rokkitt, serif; 
  margin: 0px; 
  height: 25px; 
`;

export const TagList = styled.ul`
  border: 3px solid #AA2020;
  border-radius: 2px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  width: 315px;
  height: ${({ height }) => height ? height : '100px'};
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const FormTag = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rokkitt', serif;
  font-size: 20px;
  margin: 2px;
  border: 2px solid black;
  height: 18px;
  width: ${({ width }) => width ? width : null };
  padding: 3px;
  border-radius: 2px;
`;


export const SortFilterTag = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rokkitt', serif;
  font-size: 20px;
  margin: 2px;
  border: 2px solid black;
  height: 18px;
  width: ${({ width }) => width ? width : null };
  padding: 3px;
  border-radius: 2px;
`;

export const SubmitSearch = styled.button`
  width: 140px;
  height: 40px;
  font-family: 'Rokkitt', serif;
  font-size: 20px;
  border-radius: 5px;
  margin: 5px;
  background-color: lightcyan;
`;


