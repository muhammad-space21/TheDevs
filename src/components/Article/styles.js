import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  width: 48%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 2px solid red; */
  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: black;
    letter-spacing: 0;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    order: 1;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const TextWrapper2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 2px solid red; */
  margin-bottom: 30px;
  margin-top: 20px;
  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: black;
    letter-spacing: 0;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 25px;
  }
`;

export const ImageWrapper = styled.div`
  width: 48%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  img {
    width: 60%;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
  @media screen and (max-width: 600px) {
    order: 2;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const ImgSmall = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40%;
    height: auto;
    @media screen and (max-width: 600px) {
      width: 50%; 
    }
  }
`;

export const ImageCenter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  img {
    width: 12%;
    height: auto;
    @media screen and (max-width: 600px) {
      width: 25%;
      margin-bottom: -20px;
    }
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

export const HR = styled.div`
  width: 30%;
  height: 10px;
  border-radius: 20px;
  background-color: #1ee5cf;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    width: 45%;
    height: 8px;
  }
`;

export const HRHide = styled.div`
  width: 30%;
  height: 10px;
  border-radius: 20px;
  background-color: #1ee5cf;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    width: 45%;
    height: 8px;
  }
`;