export default function fetchSetNames() {
  const baseUrl = process.env.API_URL;
  return fetch(`${baseUrl}/cards/sets`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to Get Sets';
      return json;
    })
    .then(sets => (sets.map(set => set._id)))
    .catch(err => console.log(err));
}
