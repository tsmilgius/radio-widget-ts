import { put, takeLatest, call } from 'redux-saga/effects';
import { getStations, setStationsLoading, setFetchFailed } from '../reducers/radioSlice';
import { fetchDemoData } from '../demoData/stationList';

export function* getStationsSaga() : any {
  try {
    const stations = yield call(fetchDemoData);
    yield put(getStations(stations));
  } catch (error) {
    yield put(setFetchFailed());
  }
}

export function* radioSaga() {
  yield takeLatest(setStationsLoading, getStationsSaga);
}
