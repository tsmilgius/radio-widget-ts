import React from 'react';
import style from './BottomBar.module.css';
import { selectStationActive } from '../../app/reducers/radioSlice';
import { useAppSelector } from '../../app/hooks';

const BottomBar: React.FC = () => {
  const selectedStation = useAppSelector(selectStationActive);

  return (
    <div className={style.bottombar}>
      {selectedStation ? (
        <div className={style.textContainer}>
          <div className={style.playing}>CURRENTLY PLAYING</div>
          <div className={style.station}>{selectedStation.stationName}</div>
        </div>
      ) : null}
    </div>
  );
};

export default BottomBar;
