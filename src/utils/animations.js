import styled, { keyframes } from 'styled-components';
import { bounceInUp, bounceInRight } from 'react-animations';

// Animations
const bounceInUpAnimation = keyframes`${bounceInUp}`;
const bounceInUpAnimationLong = keyframes`${bounceInUp}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;

export const BounceInUpAnimation = styled.div`
  animation: 1s ${bounceInUpAnimation};
`;

export const BounceInRightAnimation = styled.div`
  animation: 2s ${bounceInRightAnimation};
`;

export const BounceInUpAnimationLong = styled.div`
  animation: 3s ${bounceInUpAnimationLong};
`;
