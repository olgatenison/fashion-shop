import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Brands from 'components/brands/Brands';
import Arrivals from 'components/arrivals/Arrivals';
import Sale from 'components/sale/Sale';
// import Login from 'pages/login/Login';
import ShopCommunity from 'components/shopcommunity/ShopCommunity';

export const App = () => {
  return (
    <div className="App">
      <ShopCommunity />
      {/* <Login /> */}
      <Header />
      <Sale />
      <Promo />
      <Brands />
      <Arrivals />
    </div>
  );
};
