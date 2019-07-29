import React from 'react';
import { FormSection, FormSectionTitle } from '../../../styled-components/search-form';
import SetTags from './SetTags';
import SetSelector from './SetSelector';
function CardFormats() {
  return (
    <FormSection height="270px">
      <FormSectionTitle>
        Sets:
      </FormSectionTitle>
      <SetTags />
      <SetSelector />
    </FormSection>
  );
}

export default CardFormats;
