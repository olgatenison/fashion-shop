import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Brands from 'components/brands/Brands';
import Arrivals from 'components/arrivals/Arrivals';
import Sale from 'components/sale/Sale';
// import Login from 'pages/login/Login';
import Community from 'components/community/Community';
import Footer from 'components/footer/Footer';
import Favorite from 'components/favourite/Favorite';

export const App = () => {
  return (
    <div className="App">
      {/* <Login /> */}

      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favorite />
      <Community />
      <Footer />
    </div>
  );
};
