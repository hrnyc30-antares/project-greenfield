import { UPDATE_HELPFUL, SET_HELPFUL_BOOL } from './types';

export const updateHelpful = (id) => {
  return {
    type: UPDATE_HELPFUL,
    id,
  };
};

export const setHelpful = (ids) => {
  return {
    type: SET_HELPFUL_BOOL,
    ids,
  };
};
