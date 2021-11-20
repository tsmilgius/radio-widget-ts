import React from 'react';
import style from './TopBar.module.css';
import CustomButton from '../customButton/CustomButton';

import backArrowIcon from '../../assets/back-arrow.png';
import switchIcon from '../../assets/switch.png';

const TopBar: React.FC = () => {
  const handleBackClick = () => {
    return;
  };
  const handleSwitchClick = () => {
    return;
  };

  return (
    <div className={style.topbar}>
      <CustomButton
        onClick={handleBackClick}
        alt="Back"
        iconPath={backArrowIcon}
      />
      <div className={style.title}>STATIONS</div>
      <CustomButton
        onClick={handleSwitchClick}
        alt="Switch"
        iconPath={switchIcon}
      />
    </div>
  );
};

export default TopBar;
