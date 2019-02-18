import { RESTApi } from '../api';
import { actionTypes, genres, language, path } from '../../constants';

const dataMiddleware = store => next => action => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIES_REQUEST:
      next(action);
      return RESTApi(
        `/${path.MOVIES}/${action.payload.filter}`,
        `&language=${language.EN}&page=${action.payload.page}`
      )
        .then(data =>
          next({
            type: actionTypes.ACTION_GET_MOVIES_SUCCESS,
            payload: {
              page: data.page,
              data: data.results,
            },
          })
        )
        .catch(error =>
          next({
            type: actionTypes.ACTION_GET_MOVIES_FAILURE,
            payload: {
              error,
            },
          })
        );
    case actionTypes.ACTION_GET_SERIES_REQUEST:
      next(action);
      return RESTApi(
        `/${path.SERIES}/${action.payload.filter}`,
        `&language=${language.EN}&page=${action.payload.page}`
      )
        .then(data =>
          next({
            type: actionTypes.ACTION_GET_SERIES_SUCCESS,
            payload: {
              page: data.page,
              data: data.results,
            },
          })
        )
        .catch(error =>
          next({
            type: actionTypes.ACTION_GET_SERIES_FAILURE,
            payload: {
              error,
            },
          })
        );
    case actionTypes.ACTION_GET_DOCUMENTARY_REQUEST:
      next(action);
      const documentaryGenreId = store
        .getState()
        .genres.data.find(item => item.name === genres.DOCUMENTARY).id;

      return RESTApi(
        `/${path.DISCOVER}/${path.MOVIES}`,
        `&with_genres=${documentaryGenreId}&language=${language.EN}&page=${
          action.payload.page
        }`
      )
        .then(data =>
          next({
            type: actionTypes.ACTION_GET_DOCUMENTARY_SUCCESS,
            payload: {
              page: data.page,
              data: data.results,
            },
          })
        )
        .catch(error =>
          next({
            type: actionTypes.ACTION_GET_DOCUMENTARY_FAILURE,
            payload: {
              error,
            },
          })
        );
    case actionTypes.ACTION_GET_FAMILY_REQUEST:
      next(action);
      const familyGenreId = store
        .getState()
        .genres.data.find(item => item.name === genres.FAMILY).id;

      return RESTApi(
        `/${path.DISCOVER}/${path.MOVIES}`,
        `&with_genres=${familyGenreId}&language=${language.EN}&page=${
          action.payload.page
        }`
      )
        .then(data =>
          next({
            type: actionTypes.ACTION_GET_FAMILY_SUCCESS,
            payload: {
              page: data.page,
              data: data.results,
            },
          })
        )
        .catch(error =>
          next({
            type: actionTypes.ACTION_GET_FAMILY_FAILURE,
            payload: {
              error,
            },
          })
        );
    case actionTypes.ACTION_GET_GENRES_REQUEST:
      next(action);
      return RESTApi(
        `/${path.GENRE}/${path.MOVIES}/${path.LIST}`,
        `&language=${language.EN}`
      )
        .then(data => {
          next({
            type: actionTypes.ACTION_GET_GENRES_SUCCESS,
            payload: {
              data: data.genres,
            },
          });
        })
        .catch(error =>
          next({
            type: actionTypes.ACTION_GET_GENRES_FAILURE,
            payload: {
              error,
            },
          })
        );

    default:
      return next(action);
  }
};

export default dataMiddleware;
