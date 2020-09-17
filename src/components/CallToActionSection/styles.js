import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #F4F7F6;
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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

export const Heading = styled.div`
  width: 400px;
  height: fit-content;
  font-size: 25px;
  font-weight: 700;
  color: black;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-right: 0;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 550px) {
    font-weight: 500;
  }
`;