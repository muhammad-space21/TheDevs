import React, { useState } from 'react';

import {
  Container, 
  Row, 
  IllustrationWrapper1, 
  IllustrationWrapper2,
  Heading,
  Img1,
  Img2,
  Img3,
  Img4
} from './styles';

// img.
import ImageCircle1 from '../../assets/images/circle1.png';
import ImageCircle2 from '../../assets/images/circle2.png';
import ImageCircle3 from '../../assets/images/circle3.png';
import ImageCircle4 from '../../assets/images/circle4.png';

import { Text } from '../../containers/Languages';

import PrimaryButton from '../PrimaryButton';
import LeadModalContainer from '../../containers/LeadModalContainer';


const CallToActionSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <IllustrationWrapper1>
        <Img1><img src={ImageCircle1} alt="circle1"/></Img1>
        <Img2><img src={ImageCircle2} alt="circle2"/></Img2>
      </IllustrationWrapper1>
      <Row>
        <Heading>
          <Text tid="callToActionSectionTextOne" />
        </Heading>
        <PrimaryButton btnCircle onClick={() => setShowModal(true)}>
          <Text tid="buttonEnroll" />
        </PrimaryButton>
        {
          showModal && (
            <LeadModalContainer callback={() => setShowModal(false)} open={showModal} />
          )
        }
      </Row>
      <IllustrationWrapper2>
        <Img3><img src={ImageCircle3} alt="circle3"/></Img3>
        <Img4><img src={ImageCircle4} alt="circle4"/></Img4>
      </IllustrationWrapper2>
    </Container>
  )
};

export default CallToActionSection;