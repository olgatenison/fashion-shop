import styles from './Item.module.css';

const Item = () => {
  return (
    <div className={styles.item__wrapper}>
      <div className={styles.img__wrapper}></div>

      <div className={styles.txt__wrapper}>
        <div className={styles.item__name}>
          <h3 className={styles.item__title}>Dioriviera Jacket</h3>
          <p className={styles.item__subtitle}>
            White and Aquamarina Cotton Denim with Toile de Jouy Sauvage Motif
          </p>
        </div>

        <a href="#!" className={styles.item__btn}>
          <div>Add to card</div>
          <div>2 400,00 €</div>
        </a>

        <div className={styles.item__tabs}>
          <div>
            <h4 className={styles.tabs__title}>DESCRIPTION</h4>
            <p className={styles.tabs__txt}>
              Part of the Dioriviera capsule, the jacket presents the Toile de
              Jouy Sauvage motif, a new take on the hallmark House pattern. Made
              in white and aquamarina cotton denim, it has a cropped silhouette
              accented by an embroidered bee, CD leather jacron label on the
              back and two flap pockets on the front. The jacket will pair with
              the matching shorts to complete the look.
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
                Free standard delivery Dior offers two rapid and secure delivery
                options Standard delivery 3-4 working days: Free Express
                delivery 1-2 working days: € 9.95 Delivery timing is estimated
                from the time your order is shipped.
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
