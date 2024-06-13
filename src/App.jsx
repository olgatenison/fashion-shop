// import Login from 'pages/login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from 'components/footer/Footer';
import { CatalogePage } from './pages/CatalogePage';
import { HomePage } from 'pages/HomePage';
import { FavouritePage } from 'pages/FavouritePage';

export const App = () => {
  return (
    <Router>
      <div className="App ">
        {/* <Login /> */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CatalogePage />} />
          <Route path="/favourites" element={<FavouritePage />} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};
