import fb from '../../img/socials/fb.svg';
import linkedin from '../../img/socials/in.svg';
import insta from '../../img/socials/inst.svg';
import tw from '../../img/socials/tw.svg';
import './footer.css';

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__social">
          <h3 className="footer__title">FASHION</h3>
          <div className="footer__desc">
            Complete your style with awesome <br /> clothes from us.
          </div>
          <div className="wrap_svg">
            <img src={fb} alt="fb" width={52} height={52} />
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="instagram" />
            <img src={tw} alt="twitter" />
          </div>
        </div>
        <div className="footer_nav">
          <ul className="footer_nav-title">
            Company
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="footer_nav-title">
            Quick Link
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
          <ul className="footer_nav-title">
            Legal
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </section>
    </>
  );
}
