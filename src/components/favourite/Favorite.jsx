import Card from '../card/Card';
import './favorite.css';

import favImg01 from './../../img/images/promo-01.jpg';
import FavImg02 from './../../img/images/promo-02.jpg';

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__header">
          <h2 className="favorite__title">Young’s Favourite</h2>
        </div>
        <div className="favorite__cards">
          <Card title="Trending on Instagram" img={favImg01} />
          <Card title="Summer Sale" img={FavImg02} />
        </div>
      </div>
    </section>
  );
};

export default Favorite;
