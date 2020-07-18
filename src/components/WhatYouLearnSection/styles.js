import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
  width: 70%;
  height: fit-content;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  /* border: 2px solid red; */
  @media screen and (max-width: 991px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const BulletPointContainer = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    width: 95%;
  }
`;

export const BulletPoint = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */
  margin-top: 20px;
  img {
    width: 30px;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
  span {
    font-size: 18px;
    font-weight: 400;
    color: black;
    @media screen and (max-width: 550px) {
     font-size: 16px;
    }
  }
`;


export const IllustrationWrapper1 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Img1 = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    height: 150px;
    width: auto;
    @media screen and (max-width: 768px) {
      height: 100px;
    }
  }
`;

export const Img2 = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    height: 100px;
    width: auto;
    margin-left: -40px;
    top: 0;
    @media screen and (max-width: 768px) {
      height: 70px;
    }
  }
`;

export const IllustrationWrapper2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Img3 = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    height: 150px;
    width: auto;
    @media screen and (max-width: 768px) {
      height: 100px;
    }
  }
`;

export const Img4 = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    height: 100px;
    width: auto;
    margin-left: -40px;
    top: 0;
    @media screen and (max-width: 768px) {
      height: 70px;
    }
  }
`;
