import {
  GET_STYLES,
  GET_STYLES_SUCCESS,
  GET_STYLES_FAILURE,
} from '../actions/types';

const initialState = {
  styles: [],
  currentStyle: {},
  currentPhoto: {},
  loading: true,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STYLES:
      return { ...state, loading: true };
    case GET_STYLES_SUCCESS: {
      const styles = action.payload.results;
      const currentStyle = styles[0];
      return {
        styles,
        currentStyle,
        currentPhoto: currentStyle.photos[0],
        loading: false,
        hasErrors: false,
      };
    }
    case GET_STYLES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
