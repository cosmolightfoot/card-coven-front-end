export const getSearchState = state => state.searches;
export const getSearchResults = state => getSearchState(state).currentSearchResults;
export const getSearchLoading = state => getSearchState(state).loading;
export const getSearchError = state => getSearchState(state).error;

