import styles from './Tikker.module.css';

export default function Tikker() {
  return (
    <>
      <div className={styles.ticker}>
        <div className={styles.ticker__wrapper}>
          <div className={styles.ticker__item}>Where Style Meets Comfort</div>{' '}
          <div className={styles.ticker__item}>Where Style Meets Comfort</div>{' '}
          <div className={styles.ticker__item}>Where Style Meets Comfort</div>{' '}
          <div className={styles.ticker__item}>Where Style Meets Comfort</div>
        </div>
      </div>
    </>
  );
}
