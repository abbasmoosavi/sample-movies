import { put, call, all, takeLatest } from 'redux-saga/effects';
import { OmdbService } from '../../api';
import MoviesActions, { MoviesTypes } from './Actions';

function* getMovies(action) {
  yield put(MoviesActions.getMoviesLoading());
  const result = yield call(OmdbService.getAllMovies, action.params);
  if (result.status === 'OK') {
    yield put(MoviesActions.getMoviesSuccess(result?.results));
  } else {
    yield put(MoviesActions.getMoviesFailure(result?.message));
  }
}

export default function* () {
  yield all([takeLatest(MoviesTypes.GET_MOVIES, getMovies)]);
}
