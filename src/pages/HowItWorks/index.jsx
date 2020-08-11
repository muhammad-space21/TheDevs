import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderHowItWorks from '../../components/HeaderHowItWorks';
import InstructionSteps from '../../components/InstructionSteps';
import Footer from '../../components/Footer';

const styles = {
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection:' column'
};


const HowItWorks = () => {
  return (
    <div style={styles}>
      <NavbarMain />
      <HeaderHowItWorks />
      <InstructionSteps />
      <Footer />
    </div>
  )
};

export default HowItWorks;