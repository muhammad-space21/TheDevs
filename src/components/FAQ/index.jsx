import React from 'react';
import { connect } from 'react-redux';

import {
  Container, 
  Heading, 
  Question, 
  Answer,
  TextWrapper
} from './styles';

import { Text } from '../../containers/Languages';
import IconFAQ from '../../assets/icons/question.png';
import Spinner from '../../components/Spinner';

const FAQ = ({singleCourse, loading, error}) => (
  <Container>
    <Heading>
      <img src={IconFAQ} alt="icon" />
      <Text tid="faqText" />
    </Heading>
    {
      !error && !loading && singleCourse.faqs ? (
        singleCourse.faqs.map(({id, question, answer}) => (
          <TextWrapper key={id}>
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </TextWrapper> 
        ))
      ) : (<Spinner />)
    }
  </Container>
);

const mapStateToProps = (state) => ({
  singleCourse: state.singleCourseReducer.singleCourse,
  loading: state.singleCourseReducer.loading,
  error: state.singleCourseReducer.error
});

export default connect(mapStateToProps, null)(FAQ);