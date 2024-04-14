import './brands.css';
import hmlogo from './../../img/brands/hmlogo.png';
import gap from './../../img/brands/ga.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from './../../img/brands/Levis.png';
import reserved from './../../img/brands/reserved.png';
import zara from './../../img/brands/zara.png';
import esprit from './../../img/brands/esprit.png';
import only from './../../img/brands/only.png';
import boss from './../../img/brands/boss.png';
import Marquee from 'react-fast-marquee';

const Brands = () => {
  return (
    <section className="brands">
      <Marquee pauseOnHover={true} speed={90} style={{ maxWidth: '100vw' }}>
        <div className="logos">
          <div className="logos-slide">
            <img className="brands__img" src={hmlogo} alt="" />
            <img className="brands__img" src={gap} alt="" />
            <img className="brands__img" src={only} alt="" />
            <img className="brands__img" src={lacoste} alt="" />
            <img className="brands__img" src={levis} alt="" />
            <img className="brands__img" src={boss} alt="" />
            <img className="brands__img" src={reserved} alt="" />
            <img className="brands__img" src={zara} alt="" />
            <img className="brands__img" src={esprit} alt="" />{' '}
            <img className="brands__img" src={hmlogo} alt="" />
            <img className="brands__img" src={gap} alt="" />
            <img className="brands__img" src={only} alt="" />
            <img className="brands__img" src={lacoste} alt="" />
            <img className="brands__img" src={levis} alt="" />
            <img className="brands__img" src={boss} alt="" />
            <img className="brands__img" src={reserved} alt="" />
            <img className="brands__img" src={zara} alt="" />
            <img className="brands__img" src={esprit} alt="" />{' '}
            <img className="brands__img" src={only} alt="" />
            <img className="brands__img" src={lacoste} alt="" />
            <img className="brands__img" src={levis} alt="" />
            <img className="brands__img" src={boss} alt="" />
            <img className="brands__img" src={reserved} alt="" />
            <img className="brands__img" src={zara} alt="" />
            <img className="brands__img" src={esprit} alt="" />
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Brands;
