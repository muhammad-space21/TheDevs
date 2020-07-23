import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px;
  padding-left: 150px;
  padding-right: 150px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  line-height: 28px;
  text-align: center;
  span {
    font-size: 20px;
    color: #7054FF;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 991px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    font-size: 18px;
    font-weight: 500;
  }
  @media screen and (max-width: 550px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const HR = styled.div`
  width: 150px;
  height: 10px;
  border-radius: 30px;
  background-color: #1ee5cf;
  margin-left: auto;
  margin-right: auto;
`;

export const Heading = styled.div`
  width:100%;
  height: fit-content;
  text-align: center;
  font-size: 25px;
  color: black;
  line-height: 30px;
  font-weight: 700;
  margin-top: 100px;
  span {
    font-size: 22px;
    color:  #7054FF;
    font-weight: 700;
    @media screen and (max-width: 550px) {
      font-size: 22px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 22px;
    font-weight: 600;
    margin-top: 50px;
  }
`;

export const Row = styled.div`
  width: 80vw;
  height: fit-content;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 991px) {
    width: 95vw;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const IconWrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 30%;
    height: auto;
    margin-bottom: 30px;
    @media screen and (max-width: 550px) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    margin-bottom: 50px;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
`;