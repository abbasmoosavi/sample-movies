import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getMovies: ['params', 'meta'],
  getMoviesLoading: null,
  getMoviesSuccess: ['resultGetMovies'],
  getMoviesFailure: ['errorMessage'],
});

export const MoviesTypes = Types;
export default Creators;
