import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    transparent linear-gradient(119deg, #8500CD 0%, #B400C4 100%) 
    0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Component = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: row; 
  @media screen and (max-width: 768px) {
    border-radius: 30px;
  }
  @media screen and (max-width: 550px) {
    width: 85%;
    height: 85%;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: auto;
    @media screen and (max-width: 991px) {
      width: 80%;
    }
  }
  @media screen and (max-width: 991px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;