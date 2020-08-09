import styled from 'styled-components';

import { Link } from 'react-router-dom';

import NumberBgYellow from '../../assets/images/number-yellow.png';
import NumberBgBlue from '../../assets/images/number-blue.png';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Component = styled.div`
  width: 80vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ImageWrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
  /* border: 2px solid blue; */
  @media screen and (max-width: 550px) {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    margin-top: 10px;
    margin-bottom: 10px;
    order: 2;
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: black;
  line-height: 30px;
  /* border: 2px solid red; */
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    order: 1;
  }
`;

export const NumberWrapperYellow = styled.div`
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
  background-image: url(${NumberBgYellow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* border: 2px solid blue; */
  @media screen and (max-width: 550px) {
    font-size: 18px;
    height: 40px;
  }
`;

export const NumberWrapperBlue = styled.div`
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
  background-image: url(${NumberBgBlue});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 550px) {
    font-size: 18px;
    height: 40px;
  }
`;

export const IconWrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: black;
  line-height: 30px;
  margin-top: 80px;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 550px) {
    width: 45%;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 50px;
  }
`;

export const BtnBackWrapper = styled(Link)`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  margin-right: auto;
  margin-left: 50px;
  margin-bottom: 30px;
  /* border: 2px solid red; */
  cursor: pointer;
  img {
    width: 50px;
    height: auto;
    margin-bottom: -10px;
    transition: 1s;
  }
  &:hover {
    color: #7054FF;
    text-decoration: none;
    img {
      margin-left: -10px;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
    margin-left: 30px;
    margin-bottom: 20px;
    img {
      width: 30px;
      height: auto;
      margin-bottom: -5px;
    }
  }
`;