import React from 'react';

import { 
  Container, 
  TextWrapper, 
  Heading
} from './styles';

import { Text } from '../../containers/Languages';


const HeaderAboutPage = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading><Text tid="headerAboutUsText" /></Heading>  
      </TextWrapper>
    </Container>
  );
};

export default HeaderAboutPage;