import React from 'react';
import style from './Body.module.css';
import {
  selectIsLoading,
  selectStationActive,
  selectStations,
  setSelectedStation,
} from '../../app/reducers/radioSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ListItem from '../listItem/ListItem';
import { IStation } from '../../app/types/types';

const Body: React.FC = () => {
  const stations = useAppSelector(selectStations);
  const selectedStation = useAppSelector(selectStationActive);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();
  const selectStation = (station: IStation) => {
    dispatch(setSelectedStation(station));
  };

  return (
    <div className={style.body} data-testid="body-container">
      {isLoading ? (
        <div className={style.loadingContainer}>Loading stations ...</div>
      ) : null}
      {stations.map((station) => {
        const { id, stationName, frequency, radioCoverUrl } = station;
        return (
          <ListItem
            key={id}
            stationName={stationName}
            frequency={frequency}
            radioCoverUrl={radioCoverUrl}
            onClick={() => {
              selectStation(station);
            }}
            selected={
              selectedStation !== null && selectedStation.id === station.id
            }
          />
        );
      })}
    </div>
  );
};

export default Body;
