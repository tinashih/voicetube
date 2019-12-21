import {
  FILTER_FILMS,
  GET_FILMS,
  GET_FILMS_SUCCEED,
  SORT_FILMS,
  SORT_FILMS_DONE,
} from './consistent';
import bus from '../../../helper/bus';

export default {
  [FILTER_FILMS]: ({ dispatch, state }, payload) => {
    const {
      sort,
      value: {
        max = null,
        min,
      },
    } = payload;

    const filteredFilms = state.originFilms.filter(({ duration }) => {
      const smallThan = max ? duration <= max : false;
      const biggerThan = duration >= min;

      return smallThan && biggerThan;
    });

    dispatch(SORT_FILMS, {
      films: filteredFilms,
      sortByAsc: false,
      value: sort,
    });
  },
  [GET_FILMS]: async ({ commit }) => {
    // Can replace it with Promise
    try {
      const films = await bus.$api.getFilms();
      commit(GET_FILMS_SUCCEED, films);
    } catch (error) {
      // Can replace this with show error notification bar.
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.error('Error happened when get films => ', error);
    }
  },
  [SORT_FILMS]: ({ commit, state }, payload) => {
    const {
      films = state.films,
      sortByAsc = true,
      value,
    } = payload;

    if (!value) throw new Error('value is required for sort the films!');
    const items = [...films].sort((a, b) => a[value] - b[value]);

    if (!sortByAsc) {
      items.reverse();
    }

    commit(SORT_FILMS_DONE, items);
  },
};
