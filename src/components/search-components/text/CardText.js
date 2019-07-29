import React from 'react';
import { FormSection, FormSectionTitle } from '../../../styled-components/search-form';
import TextField from './TextField';

function CardText() {
  return (
    <FormSection height="60px">
      <FormSectionTitle>
        Text: 
      </FormSectionTitle>
      <TextField />
    </FormSection>
  );
}

export default CardText;
