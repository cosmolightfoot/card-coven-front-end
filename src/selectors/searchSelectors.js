export const getSearchState = state => state.searches;
export const getSearchResults = state => getSearchState(state).currentSearchResults.cards;
export const getSearchLoading = state => getSearchState(state).loading;
export const getSearchError = state => getSearchState(state).error;
export const getSearchCurrentPage = state => getSearchState(state).currentPage;
export const getSearchTotalPages = state => getSearchState(state).totalPages;
export const getSearchFulfilled = state => getSearchState(state).fulfilled;
export const getSearchNoSearches = state => getSearchState(state).noSearches;

