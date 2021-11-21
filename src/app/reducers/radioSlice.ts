import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IStation } from '../types/types';

export interface IState {
  selectedStation: IStation | null;
  stations: IStation[];
  isLoading: boolean;
  isFetchFailed: boolean;
}

const initialState: IState = {
  selectedStation: null,
  stations: [],
  isLoading: false,
  isFetchFailed: false
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    setStationsLoading: (state) => {
      state.isLoading = true;
    },
    getStations: (state, action: PayloadAction<IStation[]>) => {
      state.isLoading = false;
      state.stations = action.payload;
    },
    setSelectedStation: (state, action: PayloadAction<IStation>) => {
      if (
        state.selectedStation &&
        state.selectedStation.id === action.payload.id
      ) {
        state.selectedStation = null;
      } else {
        state.selectedStation = action.payload;
      }
    },
    setFetchFailed: (state) => {
      state.isFetchFailed = true
    }
  },
});

export const { setStationsLoading, getStations, setSelectedStation, setFetchFailed } =
  radioSlice.actions;
export const selectIsLoading = (state: RootState) => state.radio.isLoading;
export const selectStationActive = (state: RootState) =>
  state.radio.selectedStation;
export const selectStations = (state: RootState) => state.radio.stations;

export default radioSlice.reducer;
