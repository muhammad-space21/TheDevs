import React, { useState } from 'react';

import { Container, Heading } from './styles';

import { Text } from '../../containers/Languages';
import PrimaryButton from '../PrimaryButton';
import LeadModalContainer from '../../containers/LeadModalContainer';

import IconCart from '../../assets/icons/cart.png';


const JoinITCommunitySection = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Heading><Text tid="joinUsText" /></Heading>
      <PrimaryButton onClick={() => setModalShow(true)} btnCircleRed>
        <img src={IconCart} alt="icon"/>
        <Text tid="buttonEnrollToTheCourseText" />
      </PrimaryButton>
      {
        modalShow && (
          <LeadModalContainer open={modalShow} callback={() => setModalShow(false)} />
        )
      }
    </Container>
  )
};

export default JoinITCommunitySection;