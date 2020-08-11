import React from 'react';

import { ServiceCard, IconWrapper, TextWrapper } from './styles';


const PricingServiceCardsItem = ({icon, title, subtitle}) => {
  return (
    <ServiceCard>
      <IconWrapper>
        <img src={icon} alt="icon" />
      </IconWrapper>
      <TextWrapper>
          {title}
        <span>
          {subtitle}
        </span>
      </TextWrapper>
    </ServiceCard>
  )
};

export default PricingServiceCardsItem;