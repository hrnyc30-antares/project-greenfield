import { SET_HELPFUL_BOOL, UPDATE_HELPFUL } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SET_HELPFUL_BOOL:
      if (state !== action.ids.length) {
        return action.ids.map((el) => {
          const obj = {};
          obj[el] = false;
          return obj;
        });
      }
      break;
    case UPDATE_HELPFUL:
      return state.map((el) => {
        if (Number(Object.keys(el)[0]) === action.id) {
          const obj = {};
          obj[action.id] = true;
          return obj;
        }
        return el;
      });
    default:
      return state;
  }
};
