import React from 'react';

import { 
  Container, 
  Heading, 
  Question, 
  Answer 
} from './styles';

import IconFAQ from '../../assets/icons/question.png';

const FAQ = (faqs) => (
  <Container>
    <Heading>
      <img src={IconFAQ} alt="icon" />
      Frequently Asked Questions
    </Heading>
    {
      faqs.map(({id, idx}) => (
        <>
          <Question key={id}>{faqs.question}</Question>
            <Answer key={id}> 
              {faqs.answer}
            </Answer>
         </> 
      ))
    }
  </Container>
);

export default FAQ;