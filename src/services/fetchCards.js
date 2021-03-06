import { makeSearchUrl } from '../utilities/makeSearchUrl';

export default function fetchCards(searchOptions) {
  const query = makeSearchUrl(searchOptions).toString();
  return fetch(query)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to Get Cards';
      return json;
    })
    .then(({ results, totalCount, perPage, hasResults, displaying, totalPages, page, hasMore, hasLess }) => ({ 
      results,
      searchOptions,
      totalCount,
      perPage,
      hasResults,
      displaying,
      totalPages,
      page,
      hasMore,
      hasLess
    }))
    .catch(err => console.log(err));
}
