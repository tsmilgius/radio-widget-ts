import radioReducer, {
  IState,
  setStationsLoading,
  getStations,
  setSelectedStation,
} from './radioSlice';
import { IStation } from '../types/types';

const stations: IStation[] = [
  {
    id: 1,
    stationName: 'Test Station 0',
    frequency: '98.1',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/ef/All_Over_the_World_ELO_cover.jpg',
  },
  {
    id: 2,
    stationName: 'Test Station 2',
    frequency: '99.7',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/67/ELO_Time_expanded_album_cover.jpg',
  },
];

describe('radio reducer', () => {
  const initialState: IState = {
    selectedStation: null,
    stations: [],
    isLoading: false,
  };
  it('should handle initial state', () => {
    expect(radioReducer(undefined, { type: 'unknown' })).toEqual({
      selectedStation: null,
      stations: [],
      isLoading: false,
    });
  });
  it('should handle station list is loading', () => {
    const actual = radioReducer(initialState, setStationsLoading());
    expect(actual).toEqual({
      selectedStation: null,
      stations: [],
      isLoading: true,
    });
  });
  it('should get station list array and update state', () => {
    const actual = radioReducer(initialState, getStations(stations));
    expect(actual).toEqual({
      selectedStation: null,
      stations: stations,
      isLoading: false,
    });
  });
  it('should handle station selection', () => {
    const actual = radioReducer(initialState, setSelectedStation(stations[0]));
    expect(actual).toEqual({
      selectedStation: stations[0],
      stations: [],
      isLoading: false,
    });
  });
});
