import {
  GET_FILMS,
  GET_FILMS_SUCCEED,
  SORT_FILMS,
  SORT_FILMS_DONE,
} from './consistent';

export default {
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
