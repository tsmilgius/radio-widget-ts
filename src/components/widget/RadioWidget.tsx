import style from './RadioWidget.module.css';
import TopBar from '../topBar/TopBar';
import Body from '../body/Body';
import BottomBar from '../bottomBar/BottomBar';
import { useAppDispatch } from '../../app/hooks';
import React, { useEffect } from 'react';
import { setStationsLoading } from '../../app/reducers/radioSlice';

const RadioWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setStationsLoading());
  });
  return (
    <div className={style.widget} data-testid="radio-widget">
      <TopBar />
      <Body />
      <BottomBar />
    </div>
  );
};

export default RadioWidget;
