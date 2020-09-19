import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Heading, Row } from './styles';

import { Text } from '../Languages';
import TechItem from '../../components/TechItem';
import Spinner from '../../components/Spinner';

const CoursesTechsContainer = ({singleCourse, loading, error}) => (
  <Container>
    <Heading><Text tid="courseHeadingText" /></Heading>
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

CoursesTechsContainer.propTypes = {
  singleCourse: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool
};

CoursesTechsContainer.defaultPropTypes = {
  singleCourse: {},
  loading: false,
  error: false
};

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse,
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(CoursesTechsContainer);