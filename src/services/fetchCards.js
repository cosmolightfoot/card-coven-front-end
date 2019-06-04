import { makeSearchUrl } from '../utilities/makeSearchUrl';

export default function fetchCards(searchOptions) {
  const query = makeSearchUrl(searchOptions).toString();
  console.log(query);
  return fetch(query)
    .then(res => ([res.ok, res.json(), res.headers.get('total-count')]))
    .then(([ok, json, count]) => {
      if(!ok) throw 'Unable to Get Cards';
      return [json, count];
    })
    .then(([results, count]) => {
      return {
        searchResults: results,
        searchOptions,
        count, 
        totalPages: Math.ceil(count / 100)
      };
    });
}
