import initSearchState from '../../data/initialSearchState';

export function colorsToString({ black, white, red, green, blue, exclusivity }) {
  let colorString = '';
  if(exclusivity === '$OR$') {
    colorString = `${black ? 'black|' : '' }${white ? 'white|' : '' }${red ? 'red|' : '' }${green ? 'green|' : '' }${blue ? 'blue|' : '' }`;
  } else {
    colorString = `${black ? 'black,' : '' }${white ? 'white,' : '' }${red ? 'red,' : '' }${green ? 'green,' : '' }${blue ? 'blue,' : '' }`;
  } 
  const cleanedString = colorString.slice(0, -1);
  return cleanedString;
}

export function makeSearchUrl(searchOptions) {
  const searchQuery = new URL('https://api.magicthegathering.io/v1/cards');
  if(searchOptions === initSearchState) return searchQuery;
  const {
    cardName,
    colors,
    selectedFormat,
    selectedSet,
    cardText,
    selectedType,
    selectedSubtype
  } = searchOptions;
  
  const colorQuery = colorsToString(colors);
  cardName && searchQuery.searchParams.set('name', cardName);
  colorQuery && searchQuery.searchParams.set('colors', colorQuery);
  (selectedFormat !== '$DEFAULT$') && searchQuery.searchParams.set('format', selectedFormat);
  selectedSet !== '$DEFAULT$' && searchQuery.searchParams.set('sets', selectedSet);
  cardText && searchQuery.searchParams.set('text', cardText);
  selectedType !== '$DEFAULT$' && searchQuery.searchParams.set('types', selectedType);
  selectedSubtype !== '$DEFAULT$' && searchQuery.searchParams.set('subtypes', selectedSubtype);
  
  return searchQuery;
}
