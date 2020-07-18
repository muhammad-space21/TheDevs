import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;