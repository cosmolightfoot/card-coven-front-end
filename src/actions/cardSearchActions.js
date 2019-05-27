export const NEW_SEARCH = 'NEW_SEARCH';

export function newSearch(searchState) {
  return {
    type: NEW_SEARCH,
    payload: {
      ...searchState
    }
  };
}
