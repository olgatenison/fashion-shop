import React from 'react';
import Promo from 'components/promo/Promo';
import Brands from 'components/brands/Brands';
import Arrivals from 'components/arrivals/Arrivals';
import Sale from 'components/sale/Sale';
import Community from 'components/community/Community';
import Favorite from 'components/favourite/Favorite';

export const HomePage = () => {
  return (
    <>
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favorite />
      <Community />
    </>
  );
};
