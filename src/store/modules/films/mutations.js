/* eslint-disable no-param-reassign */
import {
  GET_FILMS_SUCCEED,
  SET_LOADING_STATUS,
  SORT_FILMS_DONE,
} from './consistent';

export default {
  [GET_FILMS_SUCCEED]: (state, films) => {
    state.films = films;
    state.originFilms = films;
  },
  [SET_LOADING_STATUS]: (state, loading) => {
    state.loading = loading;
  },
  [SORT_FILMS_DONE]: (state, films) => {
    state.films = films;
  },
};

/* eslint-disable no-param-reassign */
