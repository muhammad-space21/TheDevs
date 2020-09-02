import React from 'react';
import { connect } from 'react-redux';

import { 
  Container, 
  AvatarContainer, 
  Avatar,
  InstructorName, 
  TextWrapper 
} from './styles';

import Spinner from '../Spinner';

const InstructorInfo = ({singleCourse, loading, error}) => {

  return (
    <>
        {
          !loading && !error && singleCourse.authors ? (
            singleCourse.authors.map(({id, image, name, information, lastname}) => (
              <Container key={id}>
                <AvatarContainer>
                <span>Your Instructor</span>
                  <Avatar>
                    <img src={image} alt="instructor"/>
                  </Avatar>
                  <InstructorName>{name +' '+lastname}</InstructorName>
                </AvatarContainer>
                <TextWrapper>
                  {information}
                </TextWrapper>
              </Container>
            ))
          ) : (<Spinner />)
        }
    </>
  )
};

const mapStateToProps = state => ({
  loading: state.singleCourseReducer.loading,
  singleCourse: state.singleCourseReducer.singleCourse,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(InstructorInfo);