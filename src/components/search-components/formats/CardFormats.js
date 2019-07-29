import React from 'react';
import { FormSection } from '../../../styled-components/search-form';
import FormatSelector from './FormatSelector';
import FormatTags from './FormatTags';

function CardFormats() {
  return (
    <FormSection>
      <FormatTags />
      <FormatSelector />
    </FormSection>
  );
}

export default CardFormats;
