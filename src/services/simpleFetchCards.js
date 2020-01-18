import { makeSimpleSearchUrl } from '../utilities/makeSimpleSearchUrl';

export default function simpleFetchCards(searchOptions) {
  const query = makeSimpleSearchUrl(searchOptions).toString();
  console.log('QUERY', query);
  return fetch(query)
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, json]) => {
      if (!ok) throw 'Unable to Get Cards';
      return json;
    })
    .then(({ results, totalCount, perPage, hasResults, displaying, totalPages, page, hasMore, hasLess }) => {
      console.log('SERVICE', {
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
      });

      return {
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
      };
    })
    .catch(err => { throw (err); });
}
