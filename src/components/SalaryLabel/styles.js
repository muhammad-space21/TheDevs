import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFD52E;
  @media screen and (max-width: 768px) {
    padding: 30px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 25px;
  font-weight: 600;
  color: black;
  line-height: 35px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
  }
  span {
    border-radius: 5px; 
    background-color: #FC4062;
    color: white;
    margin-right: 5px;
  }
`;