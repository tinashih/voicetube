/* eslint-disable no-param-reassign */
import {
  GET_FILMS_SUCCEED,
  SORT_FILMS_DONE,
} from './consistent';

export default {
  [GET_FILMS_SUCCEED]: (state, films) => {
    state.films = films;
    state.originFilms = films;
  },
  [SORT_FILMS_DONE]: (state, films) => {
    state.films = films;
  },
};

/* eslint-disable no-param-reassign */
