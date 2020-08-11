import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
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


export const NoticeBoard = styled.div`
  width: 90%;
  height: fit-content;
  padding: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  background: transparent linear-gradient(297deg, #FDE0E0 0%, #FEE2D1 100%) 0% 0% no-repeat padding-box;
  @media screen and (max-width: 550px) {
    border-radius: 13px;
    padding: 30px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  span {
    font-size: 20px;
    font-weight: 400;
    color: black;
    line-height: 30px;
    @media screen and (max-width: 550px) {
      font-size: 18px;
      line-height: 28px;
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 550px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    @media screen and (max-width: 550px) {
      margin-left: -10px;
      position: absolute;
      margin-top: -40px;
    }
  }
`;