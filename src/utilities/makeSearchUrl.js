import initSearchState from '../data/initialSearchState';

export function colorsToString({ black, white, red, green, blue }) {
  let colorString = '';
  colorString = `${black ? 'B,' : '' }${white ? 'W,' : '' }${red ? 'R,' : '' }${green ? 'G,' : '' }${blue ? 'U,' : '' }`;
  const cleanedString = colorString.slice(0, -1);
  return cleanedString;
}

function sortToString(filters) {
  let filterString = '';
  const pattern = /(.*)\/(.*)/;
  filters.forEach(filter => {
    const subString = `${filter.filter.replace(pattern, '$1')},${filter.direction}|`;
    filterString += subString;
  });
  return filterString.slice(0, -1);
}

export function makeSearchUrl(searchOptions) {
  const baseUrl = process.env.API_URL || 'http://localhost:7891';
  const searchQuery = new URL(`${baseUrl}/api/v1/cards`);
  if(searchOptions === initSearchState) return searchQuery;
  const {
    cardName,
    page,
    colors,
    exact,
    exclude,
    colorIdentity,
    typeLine, 
    cardText,
    formats,
    selectedSets,
    layout,
    sortFilters
  } = searchOptions;
  
  const colorQuery = colorsToString(colors);
  cardName && searchQuery.searchParams.set('name', cardName);
  colorQuery && searchQuery.searchParams.set(colorIdentity ? 'color_identity' : 'colors', colorQuery);
  colorQuery && searchQuery.searchParams.set('exact', exact ? 'yes' : 'no');
  colorQuery && searchQuery.searchParams.set('exclude', exclude ? 'yes' : 'no');
  typeLine && searchQuery.searchParams.set('type_line', typeLine);
  cardText && searchQuery.searchParams.set('oracle_text', cardText);
  formats.length > 0 && searchQuery.searchParams.set('formats', formats.join(','));
  selectedSets.length > 0 && searchQuery.searchParams.set('sets', selectedSets.join(','));
  layout && searchQuery.searchParams.set('layout', layout);
  sortFilters.length > 0 && searchQuery.searchParams.set('sort', sortToString(sortFilters));
  page && searchQuery.searchParams.set('page', page);
  return searchQuery;
}
