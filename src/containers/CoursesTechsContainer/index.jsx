import React from 'react';
import { connect } from 'react-redux';

import { Container, Heading, Row } from './styles';

import TechItem from '../../components/TechItem';
import Spinner from '../../components/Spinner';

const CoursesTechsContainer = ({singleCourse, loading, error}) => (
  <Container>
    <Heading>The Technologies you will master in this course</Heading>
    <Row>
      {
        !loading && !error && singleCourse.technologies ? (
          singleCourse.technologies.map(({id, ...otherProps}) => (
            <TechItem key={id} id={id} {...otherProps} />
          ))
        ) : (<Spinner />)
      }
    </Row>
  </Container>
);

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse,
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(CoursesTechsContainer);