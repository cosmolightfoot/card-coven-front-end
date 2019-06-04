import { makeSearchUrl } from '../utilities/makeSearchUrl';

export default function fetchCards(searchOptions) {
  const query = makeSearchUrl(searchOptions).toString();
  console.log(query);
  return fetch(query)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to Get Cards';

      return json;
    });
}
