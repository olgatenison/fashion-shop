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
          <p className="favorite__subtitle">
            Explore our diverse range where each section offers unique
            opportunities to create a stylish look. From trendy accessories that
            accentuate your individuality to elegant coats and evening dresses —
            our products will help you express your unique style in any
            situation. Let's create your distinctive look together —{' '}
            <span>explore our store now!</span>
          </p>
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
