import styled, { css } from 'styled-components';

const getBtnStyle = props => {
  if (props.btnEnrollNavbar) {
    return BtnEnrollNavbar;
   } else if (props.btnCircle) {
      return BtnCircle;
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
    &:hover {
      cursor: pointer;
    }
    &:focus {
      border: none;
      outline: none;
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
  text-transform: uppercase;
  text-align: center;
  box-shadow: 3px 3px 6px #1EE5CF50;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      border: none;
      outline: none;
    }
`;
