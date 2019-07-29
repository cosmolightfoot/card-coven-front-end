import React from 'react';
import NameField from './NameField';
import { FormSectionTitle, FormSection } from '../../../styled-components/search-form-styles';

function CardName() {
  return (
    <FormSection height="60px">
      <FormSectionTitle>
        Name:
      </FormSectionTitle>
      <NameField />
    </FormSection>
  );
}

export default CardName;
