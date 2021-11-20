import React from 'react';
import style from './CustomButton.module.css';

interface IProps {
  iconPath: string;
  onClick: () => void;
  alt: string;
}

const CustomButton: React.FC<IProps> = ({ iconPath, onClick, alt }) => {
  return (
    <button onClick={onClick} className={style.button}>
      <img className={style.icon} src={iconPath} alt={alt} />
    </button>
  );
};

export default CustomButton;
