import { request } from './helper';

export async function getFilms() {
  // Can replace it with Promise
  try {
    const { data: { data = [] } } = await request('get', 'frontendQuiz');
    return data;
  } catch (error) {
    return error;
  }
}

export default {
  getFilms,
};
