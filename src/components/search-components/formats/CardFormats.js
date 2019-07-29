import React from 'react';
import { FormSection, FormSectionTitle } from '../../../styled-components/search-form-styles';
import FormatSelector from './FormatSelector';
import FormatTags from './FormatTags';

function CardFormats() {
  return (
    <FormSection>
      <FormSectionTitle>
        Formats:
      </FormSectionTitle>
      <FormatTags />
      <FormatSelector />
    </FormSection>
  );
}

export default CardFormats;
