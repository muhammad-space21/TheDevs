import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as Actions from '../../redux/modules/courses/coursesAction';

import {
  Container, 
  TextWrapper, 
  Row, 
  HeadingOne, 
  HeadingTwo
} from './styles';

import Spinner from '../../components/Spinner';
import CourseItem from '../../components/CourseItem';


const CoursesContainer = ({
  courses, 
  loading, 
  error, 
  getCourses 
}) => {
  
  // Addding action
  useEffect(() => {
    getCourses()
  }, []);

  return (
    <Container id="1">
      <TextWrapper>
        <HeadingOne>Courses <span>We offer</span></HeadingOne>
        <HeadingTwo>High quality<span>matters</span></HeadingTwo>
      </TextWrapper>
      <Row>
        {
          courses.length && !loading && !error ?
          (courses.map(({id, ...otherProps}) => (
          <CourseItem key={id} id={id} {...otherProps} />
          ))) : (
          <Spinner />
          )
        }
      </Row>
    </Container>
  );
};


CoursesContainer.propTypes = {
  // courses: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getCourses: PropTypes.func.isRequired,
  error: PropTypes.bool
};

CoursesContainer.defaultProps = {
  courses: {},
  loading: false,
  error: false,
  getCourses: () => {}
};

const mapStateToProps = (state) => ({
  courses: state.coursesReducer.courses,
  loading: state.coursesReducer.loading,
  error: state.coursesReducer.error
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CoursesContainer);