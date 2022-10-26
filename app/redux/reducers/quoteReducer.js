import {CLEAR_QUOTE, GET_QUOTE_SUCCESS} from '../constant';

export const quoteData = (state = [], action) => {
  switch (action.type) {
    case GET_QUOTE_SUCCESS:
      return action.data;

    case CLEAR_QUOTE:
      return [];

    default:
      return state;
  }
};
