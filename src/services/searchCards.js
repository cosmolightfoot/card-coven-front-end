import initSearchState from '../../data/initialSearchState';

export function makeFetchUrl(searchOptions) {
  const searchQuery = new URL('https://api.magicthegathering.io/v1/cards');
  if(searchOptions === initSearchState) return searchQuery;
  const {
    cardName,
    black,
    white,
    green,
    red,
    blue,
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
  
  const colors = [
    { ...black },
    { ...white },
    { ...red },
    { ...green },
    { ...blue }
  ];
  const colorQuery
  console.log(searchQuery);

  return searchQuery;
  //return 'https://api.magicthegathering.io/v1/cards?name=animar&colors=(green,blue,red || green|blue|red)&sets=khans&formats=standard&text=destroy%20target%20creature&type=creature&subtypes=elemental


}

makeFetchUrl();

export default function searchCards(searchOptions) {
  
}
