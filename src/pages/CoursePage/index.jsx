import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderCoursePage from '../../components/HeaderCoursePage';


const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};


const CoursePage = () => {
  return (
    <div style={styles}>
      <NavbarMain />
      <HeaderCoursePage />
    </div>
  )
};

export default CoursePage;