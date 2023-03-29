import React from 'react';
import PatronAnimation from './animatedLogo/PatronAnimation';
import Footer from './footer/Footer';
import Header from './header/Header';

const HomeWelcome = () => {
  return (
    <section style={{ height: '100vh' }}>
      <Header />
      <PatronAnimation />
      <Footer />
    </section>
  );
};

export default HomeWelcome;
