import style from './ListItem.module.css';
import CustomButton from '../customButton/CustomButton';

import plusIcon from '../../assets/plus.png';
import minusIcon from '../../assets/minus.png';

interface IProps {
  stationName: string;
  frequency: string;
  radioCoverUrl: string;
  selected: boolean;
  onClick: any;
}

const ListItem: React.FC<IProps> = ({
  stationName,
  frequency,
  radioCoverUrl,
  selected,
  onClick,
}) => {
  const handlePlusClick = () => {
    return;
  };

  const handleMinusClick = () => {
    return;
  };

  return (
    <div className={style.listContainer}>
      {selected ? (
        <div className={style.expanded}>
          <CustomButton
            onClick={handlePlusClick}
            alt="Plus"
            iconPath={plusIcon}
          />
          <img className={style.img} src={radioCoverUrl} alt="Station logo" />
          <CustomButton
            onClick={handleMinusClick}
            alt="Minus"
            iconPath={minusIcon}
          />
        </div>
      ) : null}
      <div className={style.listItem} onClick={onClick}>
        <div className={style.stationName}>{stationName}</div>
        <div className={style.stationFrequency}>{frequency}</div>
      </div>
    </div>
  );
};

export default ListItem;
