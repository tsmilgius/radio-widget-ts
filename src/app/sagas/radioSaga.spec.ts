import { call, put } from 'redux-saga/effects';
import { fetchDemoData, stationList } from '../demoData/stationList';
import { getStations } from '../reducers/radioSlice';
import { getStationsSaga } from './radioSaga';

describe('getStations', () => {
  it('get stations succesfully and put to state ', () => {
    const generator = getStationsSaga();
    const response = stationList;

    expect(generator.next().value).toEqual(call(fetchDemoData));

    expect(generator.next(response).value).toEqual(put(getStations(response)));

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
