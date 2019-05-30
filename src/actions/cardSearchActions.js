export const NEW_SEARCH_OPTIONS = 'NEW_SEARCH_OPTIONS';

export const newSearch = (searchState) => (dispatch) => {
  dispatch()


  return fetch('https://api.magicthegathering.io/v1/cards')
    .then(body => body.json())
    .then(cards => {
      console.log('IT FUCKING WORKED');
      dispatch({
        type: NEW_SEARCH_OPTIONS,
        payload: {
          searchState: searchState,
          searchResults: cards.cards
        }
      });
    });
};
