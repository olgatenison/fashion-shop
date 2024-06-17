import styles from './Item.module.css';

import arrowImg from './../../img/icons/arrow.svg';

const Card = () => {
  return (
    <div className={styles.item__wrapper}>
      <div></div>
      <div>
        <h3>Name of item</h3>
        <p></p>
      </div>
      <div className={styles.item__icon}>
        <img src={arrowImg} alt="Open" />
      </div>
    </div>
  );
};

export default Card;
