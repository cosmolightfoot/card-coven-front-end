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
  
  
  // console.log(searchQuery);
  // return searchQuery;
  //return 'https://api.magicthegathering.io/v1/cards?name=animar&colors=(green,blue,red || green|blue|red)&sets=khans&formats=standard&text=destroy%20target%20creature&type=creature&subtypes=elemental


}
