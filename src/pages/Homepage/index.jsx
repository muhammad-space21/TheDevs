import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderHomepage from '../../components/HeaderHomepage';
import CoursesContainer from '../../containers/CoursesContainer';
import ServiceCardsSection from '../../components/ServiceCardsSection';
import ArticleSection from '../../components/ArticleSection';
import PricesContainer from '../../containers/PricesContainer';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';
import AboutUsVideoSection from '../../components/AboutUsVideoSection';

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
      <CoursesContainer />
      <AboutUsVideoSection />
      <ServiceCardsSection />
      <ArticleSection />
      <PricesContainer />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Homepage;