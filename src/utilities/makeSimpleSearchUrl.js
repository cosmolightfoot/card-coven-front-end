import { colorsToString } from './makeSearchUrl';

export function makeSimpleSearchUrl(searchOptions) {
  const {
    black,
    white,
    blue, 
    green,
    red,
    text
  } = searchOptions;

  const colorString = colorsToString({ black, white, blue, green, red });
  const baseUrl = process.env.API_URL || 'http://localhost:7891';
  
  let simpleSearch = '';
  if(text || colorString) simpleSearch = `${text}|${colorString}`;

  const searchQuery = new URL(`${baseUrl}/api/v1/cards`);
  simpleSearch && searchQuery.searchParams.set('simple', simpleSearch);

  return searchQuery;
}

