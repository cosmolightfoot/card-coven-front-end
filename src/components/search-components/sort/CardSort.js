import React from 'react';
import { FormSection, FormSectionTitle } from '../../../styled-components/search-form-styles';
import SortTags from './SortTags';
import SortSelector from './SortSelector';
function CardFormats() {
  return (
    <FormSection height="160px" width="1112px">
      <FormSectionTitle>
        Sort Results:
      </FormSectionTitle>
      <SortTags />
      <SortSelector />
    </FormSection>
  );
}

export default CardFormats;
