import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams} from 'react-router-dom';
import { connect } from 'react-redux';

import { getSingleCourse } from '../../redux/modules/singleCourse/singleCourseAction';

// comp.
import NavbarMain from '../../components/Navbar';
import HeaderCoursePage from '../../components/HeaderCoursePage';
import CoursesTechsContainer from '../../containers/CoursesTechsContainer';
import CallToActionSectionTwo from '../../components/CallToActionSectionTwo';
import WhatYouLearnSection from '../../components/WhatYouLearnSection';
import PreRequisities from '../../components/PreRequisities';
import JoinITCommunitySection from '../../components/JoinITCommunitySection';
import InstructorInfo from '../../components/InstructorInfo';
import FAQ from '../../components/FAQ';
import MoneyBackPolicy from '../../components/MoneyBackPolicy';
import SalaryLabel from '../../components/SalaryLabel';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';


const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};


const CoursePage = ({
  loading, 
  error, 
  getSingleCourse, 
  singleCourse
  }) => {

  const {id} = useParams();

  // Adding action
  useEffect(() => {
    getSingleCourse(id)
  }, [id]);


  return (
    <div style={styles}>
      {
        !error && !loading && singleCourse ? (
          <>
            <NavbarMain />
            <HeaderCoursePage />
            <CoursesTechsContainer />
            <CallToActionSectionTwo />
            <WhatYouLearnSection />
            <PreRequisities />
            <JoinITCommunitySection />
            <InstructorInfo />
            <FAQ />
            <MoneyBackPolicy />
            <SalaryLabel />
            <CallToActionSection />
            <Footer />
          </>
        ) : (<Spinner />)
      }
    </div>
  )
};

CoursePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  singleCourse: PropTypes.object,
  getSingleCourse: PropTypes.func
};

CoursePage.defaultProps = {
  loading: false,
  error: false,
  singleCourse: {},
  getSingleCourse: () => {}
};


const mapStateToProps = (state) => ({
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error,
  singleCourse: state.singleCourseReducer.singleCourse
});

const mapDispatchToProps = (dispatch) => ({
  getSingleCourse: (id) => dispatch(getSingleCourse(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CoursePage);