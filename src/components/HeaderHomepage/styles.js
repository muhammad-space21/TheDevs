import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 83vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: 
    transparent linear-gradient(244deg, #B2A3FD 0%, #412CB0 100%, #000000 100%)
    0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 100px;
  @media screen and (max-width: 550px) {
    margin-top: 80px;
    height: 50vh;
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  height: fit-content;
  text-align: center;
  font-size: 31px;
  letter-spacing: 0px;
  color: #FFFFFF;
  margin-left: -50px;
  /* border: 2px solid red; */
    span {
      text-align: center;
      font-size: 31px;
      letter-spacing: 0px;
      color: #1EE5CF;
      font-weight: 700;
      @media screen and (max-width: 991px) {
        font-size: 25px;
      }
      @media screen and (max-width: 550px) {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 991px) {
      font-size: 25px;
      margin-left: -40px;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
      margin-left: 0;
    }
    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
`;

export const ImageWrapper = styled.div`
  width: 35%;
  height: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
    img {
      width: 100%;
      height: 100%;
    }
  @media screen and (max-width: 1100px) {
    height: 50%;
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;