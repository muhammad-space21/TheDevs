import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';


import {
  Container,
  Row,
  TextWrapper1,
  TextWrapper2,
  ImageWrapper1,
  ImageWrapper2
} from './styles';

import ImageOne from '../../assets/images/macbook.png';
import ImageTwo from '../../assets/images/img-comp2.png';


export const ArticleSection = () => {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.4
      }
    })
  };

  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    })
  };

  // Checking to see when the viewport is visible to the user.
  intersection && intersection.intersectionRatio < 0.3
  ? fadeOut(".fadeIn")
  : fadeIn(".fadeIn");
  return (
    <Container ref={sectionRef}>
      <Row>
        <TextWrapper1 className="fadeIn">
            <span>
              Start creating stunning web
              and mobile applications with theDevs.
            </span>
        </TextWrapper1>
        <ImageWrapper1>
          <img src={ImageOne} alt="illustration-one"/>
        </ImageWrapper1>
      </Row>
      <Row>
        <ImageWrapper2>
          <img src={ImageTwo} alt="illustration-two"/>     
        </ImageWrapper2>
        <TextWrapper2>
            <span className="fadeIn">
              Design user-friendly and mobile-first 
              web and mobile applications with theDevs.
            </span>
        </TextWrapper2>
      </Row>
    </Container>
  )
};

export default ArticleSection;