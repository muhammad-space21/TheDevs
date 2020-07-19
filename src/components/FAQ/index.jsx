import React from 'react';

import { 
  Container, 
  Heading, 
  Question, 
  Answer 
} from './styles';

import IconFAQ from '../../assets/icons/question.png';

const FAQ = () => (
  <Container>
    <Heading>
      <img src={IconFAQ} alt="icon" />
      Frequently Asked Questions
    </Heading>
    <Question>When does the course start and finish?</Question>
    <Answer> 
      The course starts now and never ends! It is a completely self-paced online 
      course - you decide when you start and when you finish.
    </Answer>
    <Question>How long do I have access to the course?</Question>
    <Answer> 
      How does lifetime access sound? After enrolling, you have unlimited access to 
      this course for as long as you like - across any and all devices you own.
    </Answer>
    <Question>What if I am unhappy with the course?</Question>
    <Answer>
      We would never want you to be unhappy! If you are unsatisfied with your
      purchase, contact us in the first 30 days and we will give you a full refund.
    </Answer>
    <Question>How up to date is this course?</Question>
    <Answer>
      The course just got updated in January 2020. It now includes 
      React hooks and context!
    </Answer>
    <Question>Does this course cover Redux?</Question>
    <Answer>
      No, I have a separate course dedicated to Redux. In my opinion, teaching React 
      with Redux introduces a lot of unnecessary complexity and keeps students 
      from learning and understanding either of these tools properly.
    </Answer>
  </Container>
);

export default FAQ;