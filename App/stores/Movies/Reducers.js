import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { MoviesTypes } from './Actions';

export const getMoviesLoading = (state) => ({
  ...state,
  loadingGetMovies: true,
  failurMessageGetMovies: null,
});

export const getMoviesSuccess = (state, { resultGetMovies }) => ({
  ...state,
  loadingGetMovies: false,
  resultGetMovies,
  failurMessageGetMovies: null,
});

export const getMoviesFailure = (state, { errorMessage }) => ({
  ...state,
  loadingGetMovies: false,
  resultGetMovies: [],
  failurMessageGetMovies: errorMessage,
});

export const getDetailLoading = (state) => ({
  ...state,
  loadingGetDetail: true,
  failurMessageGetDetail: null,
});

export const getDetailSuccess = (state, { resultGetDetail }) => ({
  ...state,
  loadingGetDetail: false,
  resultGetDetail,
  failurMessageGetDetail: null,
});

export const getDetailFailure = (state, { errorMessage }) => ({
  ...state,
  loadingGetDetail: false,
  resultGetDetail: [],
  failurMessageGetDetail: errorMessage,
});

export const reducer = createReducer(INITIAL_STATE, {
  [MoviesTypes.GET_MOVIES_LOADING]: getMoviesLoading,
  [MoviesTypes.GET_MOVIES_SUCCESS]: getMoviesSuccess,
  [MoviesTypes.GET_MOVIES_FAILURE]: getMoviesFailure,

  [MoviesTypes.GET_DETAIL_LOADING]: getDetailLoading,
  [MoviesTypes.GET_DETAIL_SUCCESS]: getDetailSuccess,
  [MoviesTypes.GET_DETAIL_FAILURE]: getDetailFailure,
});
