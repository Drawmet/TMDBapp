import { actionTypes } from '../../constants';
import { path } from '../../constants';

export const getMoviesAction = (filter = 'popular', page = '1') => ({
  type: actionTypes.ACTION_GET_MOVIES_REQUEST,
  payload: {
    filter,
    page,
  },
});

export const getSeriesAction = (filter = 'popular', page = '1') => ({
  type: actionTypes.ACTION_GET_SERIES_REQUEST,
  payload: {
    filter,
    page,
  },
});

export const getFamilyAction = (filter = 'popular', page = '1') => ({
  type: actionTypes.ACTION_GET_FAMILY_REQUEST,
  payload: {
    filter,
    page,
  },
});

export const getDocumentaryAction = (
  filter = 'popular',
  page = '1',
  genreId
) => ({
  type: actionTypes.ACTION_GET_DOCUMENTARY_REQUEST,
  payload: {
    filter,
    page,
  },
});

export const getGenresAction = () => ({
  type: actionTypes.ACTION_GET_GENRES_REQUEST,
  payload: {},
});

export const getDetaildByIdAction = (type = path.MOVIES, id) => ({
  type: actionTypes.ACTION_GET_DETAILS_BY_ID_REQUEST,
  payload: {
    type,
    id,
  },
});
