import { selectCardDetail } from "./cardSearchActions";
import { SELECT_CARD_DETAIL } from "../types/card-search-types";

describe('card search actions', () => {
  it('select card detail', () => {
    expect(selectCardDetail('test')).toEqual({
      type: SELECT_CARD_DETAIL,
      payload: 'test'
    });
  });
});
