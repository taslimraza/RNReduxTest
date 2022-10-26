import {TOGGLE_THEME} from '../constant';

export const themeData = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {...state, isDark: action.isDark};

    default:
      return state;
  }
};
