import {
  FILTER_FILMS,
  GET_FILMS,
  GET_FILMS_SUCCEED,
  SORT_FILMS,
  SORT_FILMS_DONE,
} from './consistent';

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
  [GET_FILMS]: ({ commit }) => {
    fetch('https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz')
      .then(response => response.json())
      .then(({ data }) => {
        commit(GET_FILMS_SUCCEED, data);
      });
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
