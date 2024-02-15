import './sale.css';
import saleImg from './../../img/images/y-woman.png';

export default function Sale() {
  return (
    <>
      <section className="sale">
        <div className="container">
          <div className="sale__content">
            <div className="sale__img">
              <img src={saleImg} alt="sale" />
            </div>

            <div className="sale__text">
              <div className="sale__title">
                <span className="highlight">
                  <span>PAYDAY</span>
                </span>
                SALE NOW
              </div>

              <div className="sale__desc">
                <span>
                  Spend minimal $100 get 30% off voucher code for your next
                  purchase
                </span>
                <span>
                  <strong>1 June - 10 June 2021</strong>
                  <br />
                  *Terms & Conditions apply
                </span>
              </div>

              <div className="sale__btn-wrapper">
                <a href="#!" className="sale__btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
