import React from 'react';

import  Navbar from '../../components/Navbar';
import HeaderAboutPage from '../../components/HeaderAboutPage';
import SalaryLabel from '../../components/SalaryLabel';
import Footer from '../../components/Footer';

const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const AboutPage = () => {
  return (
    <div style={styles}>
      <Navbar />
      <HeaderAboutPage />
      <SalaryLabel />
      <Footer />
    </div>
  )
};

export default AboutPage;