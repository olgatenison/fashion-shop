import './promo.css';
import Title from 'components/title/Title';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <Title />

            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
