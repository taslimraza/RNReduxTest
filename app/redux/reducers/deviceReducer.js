import {ADD_DEVICE, DELETE_DEVICE, UPDATE_DEVICE} from '../constant';

export const deviceData = (state = [], action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return [action.data, ...state];

    case UPDATE_DEVICE:
      state.forEach(item => {
        if (item.id === action.data.id) {
          item.model = action.data.model;
          item.os = action.data.os;
          item.currentOwner = action.data.currentOwner;
          item.note = action.data.note;
        }
      });
      return [...state];

    case DELETE_DEVICE:
      const remainingItems = state.filter(item => item.id !== action.data.id);
      return [...remainingItems];

    default:
      return state;
  }
};
