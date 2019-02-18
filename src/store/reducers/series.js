import { actionTypes, path } from '../../constants';
import { IMG_RESOURCE, PLACEHOLDER } from '../../constants/utils';

const initialState = {
  current: {},
  data: [],
  page: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_SERIES_SUCCESS:
      if (action.payload.page > state.page) {
        return {
          ...state,
          page: action.payload.page,
          data: [
            ...state.data,
            ...action.payload.data.map(item => ({
              ...item,
              src: item['poster_path']
                ? `${IMG_RESOURCE}${item['poster_path']}`
                : PLACEHOLDER,
            })),
          ],
        };
      }
      return {
        ...state,
        data: action.payload.data.map(item => ({
          ...item,
          src: item['poster_path']
            ? `${IMG_RESOURCE}${item['poster_path']}`
            : PLACEHOLDER,
        })),
      };
    case actionTypes.ACTION_GET_DETAILS_BY_ID_SUCCESS:
      if (action.payload.type === path.SERIES) {
        const item = action.payload.data;
        return {
          ...state,
          current: {
            ...item,
            title: item.name,
            src: item['poster_path']
              ? `${IMG_RESOURCE}${item['poster_path']}`
              : PLACEHOLDER,
            description: item.overview,
          },
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
