import { put, call, all, takeLatest } from 'redux-saga/effects';
import { OmdbService } from '../../api';
import { NStrings } from '../../navigator';
import { navigate } from '../../navigator/NavigationService';
import MoviesActions, { MoviesTypes } from './Actions';

function* getMovies(action) {
  yield put(MoviesActions.getMoviesLoading());
  const result = yield call(OmdbService.getAllMovies, action.params);
  console.log(`result`, result);
  if (result.Response) {
    yield put(MoviesActions.getMoviesSuccess(result?.Search));
  } else {
    yield put(MoviesActions.getMoviesFailure(result?.message));
  }
}
function* getDetail(action) {
  yield put(MoviesActions.getDetailLoading());
  navigate(NStrings.Routes.DETAIL_SCREEN);
  const result = yield call(OmdbService.getDetail, action.params);
  console.log(`result`, result);
  if (result.Response) {
    yield put(MoviesActions.getDetailSuccess(result));
  } else {
    yield put(MoviesActions.getDetailFailure(result?.message));
  }
}

export default function* () {
  yield all([takeLatest(MoviesTypes.GET_MOVIES, getMovies)]);
  yield all([takeLatest(MoviesTypes.GET_DETAIL, getDetail)]);
}
