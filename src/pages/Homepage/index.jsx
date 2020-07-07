import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderHomepage from '../../components/HeaderHomepage';
import ArticleSection from '../../components/ArticleSection';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';

const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}

const Homepage = () => {
  return (
    <div style={styles}>
      <NavbarMain />
      <HeaderHomepage />
      <ArticleSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Homepage;