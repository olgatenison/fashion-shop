import styles from './Item.module.css';

import arrowImg from './../../img/icons/arrow.svg';

const Card = () => {
  return (
    <div className={styles.item__wrapper}>
      <div className={styles.item__icon}>
        <img src={arrowImg} alt="Open" />
      </div>
    </div>
  );
};

export default Card;
