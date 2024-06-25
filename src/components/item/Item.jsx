import React, { useState } from 'react';
import styles from './Item.module.css';
import heartIcon from './../../img/icons/heart.png';
const Item = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className={styles.item__wrapper}>
      <div className={styles.img__wrapper}></div>

      <div className={styles.txt__wrapper}>
        <div className={styles.item__name}>
          <div className={styles.item__row}>
            <h3 className={styles.item__title}>Dioriviera Jacket </h3>
            <div className={styles.card__icon}>
              <img src={heartIcon} alt="like" />
            </div>
          </div>
          <p className={styles.item__subtitle}>
            White and Aquamarina Cotton Denim with Toile de Jouy Sauvage Motif
          </p>
        </div>

        <a href="#!" className={styles.item__btn}>
          <div>Add to cart</div>
          <div className={styles.item__price}>2 400,00 €</div>
        </a>

        <div className={styles.item__size}>
          <a href="#!" className={styles.item__sizetitle}>
            Select your size
          </a>
          <div className={styles.item__yoursize}>ONE SIZE</div>
          {/* <div className={styles.item__list}>
            <li className={styles.item__listitem}>XS</li>
            <li className={styles.item__listitem}>S</li>
            <li className={styles.item__listitem}>M</li>
            <li className={styles.item__listitem}>L</li>
            <li className={styles.item__listitem}>XL</li>
            <li className={styles.item__listitem}>XXL</li>
          </div> */}
        </div>

        <div className={styles.tabs__nav}>
          <div
            className={`${styles.tabs__title} ${
              activeTab === 'description' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('description')}
          >
            DESCRIPTION
          </div>
          <div
            className={`${styles.tabs__title} ${
              activeTab === 'delivery' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('delivery')}
          >
            DELIVERY & RETURNS
          </div>
        </div>

        <div
          className={`${styles.tabs__content} ${
            activeTab === 'description' ? styles.active : ''
          }`}
        >
          <p className={styles.tabs__txt}>
            <div>
              <span> U. CLOTHES</span>- is a brand that creates unique clothing
              combining quality, style, and comfort. Each of our products is
              made from high-quality materials and designed with contemporary
              fashion trends in mind. We strive to offer our customers only the
              best, so you can feel confident and comfortable in any situation.
            </div>
            <div>
              Our design philosophy revolves around sustainability and ethical
              production practices. By choosing <span>U.CLOTHES</span>, you are
              not only embracing fashion but also supporting a brand that cares
              about the environment and the well-being of its workers. We
              believe in creating timeless pieces that will remain staples in
              your wardrobe for years to come.
            </div>
          </p>
        </div>
        <div
          className={`${styles.tabs__content} ${
            activeTab === 'delivery' ? styles.active : ''
          }`}
        >
          <p className={styles.tabs__txt}>
            <div>
              Free exchanges and returns You can return or exchange any order –
              in original condition – within 30 days of receiving it, unless it
              is a matter of a personalized item.
            </div>
            <div>
              Free standard delivery offers two rapid and secure delivery
              options
              <br />
              <span>Standard delivery</span> 3-4 working days: <span>Free</span>
              <br />
              <span> Express delivery</span> 1-2 working days:{' '}
              <span>€ 9.95 </span>
              <br />
              Delivery timing is estimated from the time your order is shipped.
            </div>
            <div>
              Dispatch within 24 hours Orders are prepared and dispatched the
              same day when placed by 12 p.m. and within 24 hours when placed
              after 12 p.m.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
