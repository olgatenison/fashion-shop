// import Login from 'pages/login/Login';
import Header from './components/header/Header';
import { Home } from 'pages/Home';
import Footer from 'components/footer/Footer';
import { Catalouge } from 'pages/Catalogue';

export const App = () => {
  return (
    <div className="App ">
      {/* <Login /> */}
      <Header />
      <Home />
      <Catalouge />
      <Footer />
    </div>
  );
};
