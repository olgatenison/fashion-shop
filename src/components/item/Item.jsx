import styles from './Item.module.css';

const Item = () => {
  return (
    <div className={styles.item__wrapper}>
      <div className={styles.img__wrapper}></div>

      <div className={styles.txt__wrapper}>
        <div className={styles.item__name}>
          <h3 className={styles.item__title}>Dioriviera Jacket</h3>
          <svg className={styles.icon}>
            <use href="./../img/icons/Heart.svg" />
          </svg>

          <p className={styles.item__subtitle}>
            White and Aquamarina Cotton Denim with Toile de Jouy Sauvage Motif
          </p>
        </div>

        <a href="#!" className={styles.item__btn}>
          <div>Add to card</div>
          <div className={styles.item__price}>2 400,00 €</div>
        </a>

        <div className={styles.item__tabs}>
          <div>
            <h4 className={styles.tabs__title}>DESCRIPTION</h4>
            <p className={styles.tabs__txt}>
              U. CLOTHES - is a brand that creates unique clothing combining
              quality, style, and comfort. Each of our products is made from
              high-quality materials and designed with contemporary fashion
              trends in mind. We strive to offer our customers only the best, so
              you can feel confident and comfortable in any situation.
            </p>
          </div>
          <div>
            <h4 className={styles.tabs__title}>DELIVERY & RETURNS</h4>
            <p className={styles.tabs__txt}>
              <span>
                Free exchanges and returns You can return or exchange any order
                – in original condition – within 30 days of receiving it, unless
                it is a matter of a personalized item. For more information,
                please consult our FAQs.
              </span>
              <span>
                Free standard delivery our offers two rapid and secure delivery
                options
                <br />
                Standard delivery 3-4 working days: Free
                <br /> Express delivery 1-2 working days: € 9.95 <br />
                Delivery timing is estimated from the time your order is
                shipped.
              </span>
              <span>
                Dispatch within 24 hours Orders are prepared and dispatched the
                same day when placed by 12 p.m. and within 24 hours when placed
                after 12 p.m.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
