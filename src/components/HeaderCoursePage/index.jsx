import React from 'react';
import { connect } from 'react-redux';

import {
  Container, 
  TextWrapper, 
  SecondaryTitle, 
  Heading
} from './styles';

import PrimaryButton from '../PrimaryButton';

const HeaderCoursePage = ({singleCourse}) => {
  return (
    <Container>
      <TextWrapper>
        <Heading>{singleCourse.title}</Heading>
            <SecondaryTitle>
              {singleCourse.subtitle}
            </SecondaryTitle>
      </TextWrapper>
      <PrimaryButton btnHeaderLong>Enroll in Course</PrimaryButton>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse
});

export default connect(mapStateToProps, null)(HeaderCoursePage);

// export default HeaderCoursePage;