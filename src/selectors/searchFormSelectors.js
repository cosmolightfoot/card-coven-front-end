export const getSearchFormState = state => state.searchForm;
export const getCardName = state => getSearchFormState(state).cardName;
export const getTypeLine = state => getSearchFormState(state).typeLine;
export const getCardText = state => getSearchFormState(state).cardText;
export const getBlack = state => getSearchFormState(state).black;
export const getWhite = state => getSearchFormState(state).white;
