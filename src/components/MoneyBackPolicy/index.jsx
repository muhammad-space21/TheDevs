import React from 'react';

import { 
  Container,
  Heading,
  SubTitle,
  TextWrapper,
  IconWrapper
 } from './styles';

 import { Text } from '../../containers/Languages';
import IconLabel from '../../assets/icons/checkout.svg';

const MoneyBackPolicy = () => (
  <Container>
    <Heading><Text tid="moneyBackGuaranteeText" /></Heading>
    <SubTitle><Text tid="moneyBackSubtitleText" /></SubTitle>
    <TextWrapper>
      <Text tid="moneyBackBodyText" />
    </TextWrapper>
    <IconWrapper><img src={IconLabel} alt="icon"/></IconWrapper>
  </Container>
);

export default MoneyBackPolicy;