import './promo.css';
import Title from 'components/title/Title';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              {/* <span className="highlight highlight--yellow">
								<span>UNIQUE</span>
							</span>
							CLOTHES. */}
            </div>
            <Title />
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          {/* <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Promo;
