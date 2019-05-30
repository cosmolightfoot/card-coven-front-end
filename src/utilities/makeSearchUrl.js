import initSearchState from '../../data/initialSearchState';

export function colorsToString({ black, white, red, green, blue, exclusivity }) {
  if(exclusivity === '$OR$') return `${black ? 'black' : '' }|${white ? 'white' : '' }|${red ? 'red' : '' }|${green ? 'green' : '' }|${blue ? 'blue' : '' }`;
  else return `${black ? 'black' : '' },${white ? 'white' : '' },${red ? 'red' : '' },${green ? 'green' : '' },${blue ? 'blue' : '' }`;
} 

export function makeSearchUrl(searchOptions) {
  const searchQuery = new URL('https://api.magicthegathering.io/v1/cards');
  if(searchOptions === initSearchState) return searchQuery;
  const {
    cardName,
    colors,
    exclusivity,
    commander,
    modern,
    standard,
    vintage,
    penny,
    duel,
    selectedSet,
    cardText,
    selectedType,
    selectedSubtype
  } = searchOptions;
  
  
  // console.log(searchQuery);
  // return searchQuery;
  //return 'https://api.magicthegathering.io/v1/cards?name=animar&colors=(green,blue,red || green|blue|red)&sets=khans&formats=standard&text=destroy%20target%20creature&type=creature&subtypes=elemental


}
