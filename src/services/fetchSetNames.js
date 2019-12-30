export default function fetchSetNames() {
  const baseUrl = process.env.API_URL;
  return fetch(`${baseUrl}/api/v1/cards/sets/`)
    .then(response => {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(sets => {
      return sets.map(set => set._id).sort();
    })
    .catch(err => console.log(err));
}
