import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: black;
  span {
    font-size: 20px;
    font-weight: 500;
    color: #2669FF;
    font-style: italic;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const ServiceCard = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2669FF;
  border-radius: 15px;
  cursor: pointer;
  transition: 1s;
  margin-bottom: 30px;
  &:hover {
    background-color: #7054FF;
  }
  @media screen and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 700px) {
    width: 47%;
  }
`;

export const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px; 
  background-color: white;
  img {
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    margin-top: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
  span {
    font-size: 15px;
    color: white;
    font-weight: 500;
    margin-top: 15px;
    @media screen and (max-width: 700px) {
      font-size: 11px;
      margin-top: 8px;
      line-height: 15px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
  }
`;