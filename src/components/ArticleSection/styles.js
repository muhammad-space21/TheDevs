import styled from 'styled-components';

import ImageBackground1 from '../../assets/images/img-1.png';
import ImageBackground2 from '../../assets/images/img-2.png';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    background-color: #F5F8FA;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

export const ImageWrapper1 = styled.div`
  width: 70%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  background-image: url(${ImageBackground1});
  background-size: cover;
  background-position: center;
  /* border: 2px solid red; */
  img {
    width: 65%;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    height: 60vh;
  }
  @media screen and (max-width: 991px) {
    width: 60%;
    height: 50vh;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 25vh;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper2 = styled.div`
  width: 70%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${ImageBackground2});
  background-size: cover;
  background-position: center;
  /* border: 2px solid red; */
  padding-left: 50px;
  img {
    width: 65%;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    height: 60vh;
  }
  @media screen and (max-width: 991px) {
    width: 60%;
    height: 50vh;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 25vh;
    order: 2;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const TextWrapper1 = styled.div`
  width: 30%;
  height: 80vh;
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* border: 2px solid black; */
  z-index: 888;
  span {
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    margin-right: -150px;
    padding-left: 100px;
    @media screen and (max-width: 991px) {
      margin-right: 0;
      padding-left: 0;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 30%;
    height: 60vh;
  }
  @media screen and (max-width: 991px) {
    width: 40%;
    height: 50vh;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 25vh;
    z-index: 0;
  }
`;

export const TextWrapper2 = styled.div`
  width: 30%;
  height: 80vh;
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid black; */
  z-index: 888;
  span {
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    margin-left: -150px;
    padding-right: 100px;
    @media screen and (max-width: 991px) {
      margin-left: 0;
      padding-right: 0;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 30%;
    height: 60vh;
  }
  @media screen and (max-width: 991px) {
    width: 40%;
    height: 50vh;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 25vh;
    order: 1;
    z-index: 0;
  }
`;