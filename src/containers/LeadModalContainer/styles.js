import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

export const Form = styled.form`
  width: 100%;
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
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const InputIcon = styled.div`
  width: 100px;
  height: 50px;
  /* background-color: #E5E5E5; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 30px;
  padding-left: 20px;
  img {
    width: 18px;
    height: auto;
    @media screen and (max-width: 550px) {
      width: 15px;
    }
  }
  @media screen and (max-width: 550px) {
    height: 45px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  /* background-color: #E5E5E5; */
  background-color: white;
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
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
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
    height: 45px;
    text-indent: 5px;
    font-size: 14px;
  }
`;

export const InputTel = styled(MaskedInput)`
  width: 100%;
  height: 50px;
  /* background-color: #E5E5E5; */
  background-color: white;
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
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
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
    height: 45px;
    text-indent: 5px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  /* background-color: #E5E5E5; */
  background-color: white;
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
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
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
    height: 45px;
    text-indent: 5px;
    font-size: 14px;
  }
`;

export const CloseIcon = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-top: -10px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`;