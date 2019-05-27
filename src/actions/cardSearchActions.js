export const NEW_SEARCH_OPTIONS = 'NEW_SEARCH_OPTIONS';

export function newSearch(searchState) {
  return {
    type: NEW_SEARCH_OPTIONS,
    payload: {
      ...searchState
    }
  };
}
