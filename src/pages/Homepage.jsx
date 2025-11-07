import React from 'react';
import Hero from '../components/Homepage/Hero';
import Description from '../components/Homepage/Description';
import Products from '../components/Homepage/Products';

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Description />
      <Products />
    </div>
  );
};

export default Homepage;
