import { actionTypes } from '../../constants';

const initialState = {
  processed: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_GENRES_REQUEST:
      return {
        ...state,
        processed: true,
      };
    case actionTypes.ACTION_GET_GENRES_SUCCESS:
      return {
        ...state,
        processed: false,
      };
    default:
      return state;
  }
};

export default reducer;
