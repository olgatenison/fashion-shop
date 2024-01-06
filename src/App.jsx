import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Brands from 'components/brands/Brands';
import Arrivals from 'components/arrivals/Arrivals';
import Title from 'components/title/Title';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Promo />
      <Brands />
      <Arrivals />
    </div>
  );
};
