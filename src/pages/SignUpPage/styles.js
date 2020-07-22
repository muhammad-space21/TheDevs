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

export const Form = styled.form`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 991px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: black;
  margin-bottom: 30px;
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;

export const InputRow = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const InputIcon = styled.div`
  width: 120px;
  height: 55px;
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 30px;
  padding-left: 20px;
  img {
    width: 25px;
    height: auto;
    @media screen and (max-width: 550px) {
      width: 20px;
    }
  }
  @media screen and (max-width: 550px) {
    height: 50px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  background-color: #E5E5E5;
  border-radius: 30px;
  margin-left: -48px;
  text-indent: 10px;
  color: #AF00C5;
  border: none;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: grey;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    &::placeholder {
      color: #AF00C5;
    }
  }
  @media screen and (max-width: 550px) {
    height: 50px;
    text-indent: 0;
  }
`;