import '../header.css';

export default function MobMenu({ onClose }) {
  return (
    <div className="header_mobmenu">
      <nav className="header__nav_m">
        <ul className="header__list_m">
          <li onClick={onClose}>
            <a href="#!">CATALOGUE</a>
          </li>
          <li onClick={onClose}>
            <a href="#!">FASHION</a>
          </li>
          <li onClick={onClose}>
            <a href="#!">FAVOURITE</a>
          </li>
          <li onClick={onClose}>
            <a href="#!">LIFESTYLE</a>
          </li>
          <li className="header__btn_m" onClick={onClose}>
            <a href="#!" className="header__nav-btn_m">
              SIGN UP
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
