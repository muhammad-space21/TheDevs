import React from 'react';

import { Container, Col1, Col2, Heading } from './styles';

import ImageHeader from '../../assets/illustrations/macbook.png';


const HeaderArticle = () => (
  <Container>
    <Col1>
      <Heading> 
        Why to study Frontend development in 2020 ?
      </Heading>
    </Col1>
    <Col2>
      <img src={ImageHeader} alt="icon" />
    </Col2>
  </Container>
);

export default HeaderArticle;