import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Brands from 'components/brands/Brands';
import Arrivals from 'components/arrivals/Arrivals';
import Login from 'pages/login/Login';

export const App = () => {
  return (
    <div className="App">
      <Login />
      <Header />

      <Promo />
      <Brands />
      <Arrivals />
    </div>
  );
};
