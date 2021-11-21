import { call, put } from 'redux-saga/effects';
import { fetchDemoData, stationList } from '../demoData/stationList';
import { getStations, setFetchFailed } from '../reducers/radioSlice';
import { getStationsSaga } from './radioSaga';

describe('getStations', () => {
  it('get stations succesfully and put to state ', () => {
    const generator = getStationsSaga();
    const response = { data: { results: stationList } };

    expect(generator.next().value).toEqual(call(fetchDemoData));
    expect(generator.next(response.data.results).value).toEqual(put(getStations(stationList)));
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it('put failure action if fetch failed', () => {
    const error = 'station list fetch failed';
    const generator = getStationsSaga();
    generator.next();
    expect(generator.throw(error).value).toEqual(put(setFetchFailed()));
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
