import { put, takeLatest, call } from 'redux-saga/effects';
import { getStations, setStationsLoading } from '../reducers/radioSlice';
import { fetchDemoData } from '../demoData/stationList';
import { IStation } from '../types/types';

export function* getStationsSaga() {
  try {
    const stations: IStation[] = yield call(fetchDemoData);
    yield put(getStations(stations));
  } catch (error) {
    //fail silently
  }
}

export function* radioSaga() {
  yield takeLatest(setStationsLoading, getStationsSaga);
}
