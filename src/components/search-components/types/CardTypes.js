import React from 'react';
import TypesField from './TypesField';
import { FormSection, FormSectionTitle } from '../../../styled-components/search-form-styles';

function CardTypes() {
  return (
    <FormSection height="60px">
      <FormSectionTitle>
        Type Line:
      </FormSectionTitle>
      <TypesField />
    </FormSection>
  );
}

export default CardTypes;
