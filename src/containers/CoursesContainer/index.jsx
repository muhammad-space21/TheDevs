import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import {
  Container, 
  TextWrapper, 
  Row, 
  HeadingOne, 
  HeadingTwo
} from './styles';

import { getCourses } from '../../redux/modules/courses/coursesAction';

import Spinner from '../../components/Spinner';
import CourseItem from '../../components/CourseItem';


const CoursesContainer = ({
  courses, 
  loading, 
  error, 
  getCourses
  }) => {
  const {id} = useParams();

  console.log('courses', courses);

  // adding action
  useEffect(() => {
    if (id) {
      getCourses(id)
    }
  }, [id]);


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
          <CourseItem id={id} {...otherProps} />
          ))) : (
          <Spinner />
          )
        }
      </Row>
    </Container>
  )
};

CoursesContainer.propTypes = {
  courses: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  getCourses: PropTypes.func
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

const mapDispatchToProps = (dispatch) => ({
  getCourses: (id) => dispatch(getCourses(id))
});

 

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);