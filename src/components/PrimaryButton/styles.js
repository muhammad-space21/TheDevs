import styled, { css } from 'styled-components';

const getBtnStyle = props => {
  if (props.btnEnrollNavbar) {
    return BtnEnrollNavbar;
   } else if (props.btnCircle) {
      return BtnCircle;
    } else if (props.btnHeaderLong) {
      return BtnHeaderLong;
    } else if (props.btnCircleRed) {
      return ButtonCircleRed;
    } else if (props.btnCard) {
      return BtnCard;
    } else if (props.formBtn) {
      return FormBtn;
    } else {
      return Container;
  };
};


export const Container = styled.button`
  width: fit-content;
  height: fit-content;
  background-image: none;
  background-color: none;
  border: none;
  outline: none;
  ${getBtnStyle}
`;

export const BtnEnrollNavbar = css`
  width: 200px;
  height: 60px;
  border-radius: none;
  border: none;
  background-color: #08d0bd;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  transition: all .35s;
  cursor: pointer;
    &:hover {
      opacity: 1;
    }
    &:hover:after {
      width: 100%;
    }
    &:focus {
      border: none;
      outline: none;
    }
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #7F00FF;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      transition: all .35s;
    }
    span {
      position: relative;
      z-index: 2;
    }
`;


export const BtnCircle = css`
  width: 220px;
  height: 60px;
  border-radius: 25px;
  border: none;
  background-color: #1EE5CF;
  color: white;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  box-shadow: 3px 3px 6px #1EE5CF50;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      box-shadow: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
`;

export const FormBtn = css`
  width: 85%;
  height: 55px;
  border-radius: 25px;
  border: none;
  background-color: #1EE5CF;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  box-shadow: 3px 3px 6px #1EE5CF50;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      box-shadow: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
    @media screen and (max-width: 550px) {
      height: 50px;
    }
`;


export const BtnCard = css`
  width: 90%;
  height: 55px;
  border-radius: 10px;
  border: none;
  background-color: #1EE5CF;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 3px 3px 6px #1EE5CF50;
  z-index: 500;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      box-shadow: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
`;

export const BtnHeaderLong = css`
  width: 250px;
  height: 55px;
  border-radius: 25px;
  border: none;
  background-color: #08d0bd;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  box-shadow: 3px 3px 6px #1EE5CF50;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      box-shadow: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
    @media screen and (max-width: 550px) {
      width: 220px;
      height: 50px;
      font-size: 16px;
    }
`;

export const ButtonCircleRed = css`
  width: 240px;
  height: 55px;
  background-color: #FC4062;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: white;
  border-radius: 25px;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      border: none;
      outline: none;
    }
    img {
      width: 30px;
      height: auto;
      margin-right: 10px;
    }
`;