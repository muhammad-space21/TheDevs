import React from 'react';

import { ServiceCard, IconWrapper, TextWrapper } from './styles';


const PricingServiceCardsItem = (service_cards) => {
  return (
    <ServiceCard>
      <IconWrapper>
        <img src={service_cards.image} alt="icon" />
      </IconWrapper>
      <TextWrapper>
          {service_cards.title}
        <span>
          {service_cards.subtitle}
        </span>
      </TextWrapper>
    </ServiceCard>
  )
};

export default PricingServiceCardsItem;