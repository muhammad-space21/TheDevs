import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


export const NavbarStyled = styled(Navbar)`
  width: 100vw;
  height: 100px;
  background-color: #F4F7F6;
  position: fixed;
  z-index: 1000;
  font-family: 'Varela Round', sans-serif;
  @media screen and (max-width: 550px) {
    height: 80px;
  }
`;

export const NavStyled = styled(Nav)`
  width: 60vw; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 888;
    @media screen and (max-width: 991px) {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #F4F7F6;
      height: 60vh;
      margin-left: auto;
      margin-right: auto;
    }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  z-index: 888;
  background-color: #F4F7F6;
  @media screen and (max-width: 991px) {
    margin-left: -50px;
    margin-right: -50px;
  }
`;

export const NavLinkHide = styled(HashLink)`
  display: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer; 
    text-decoration: none;
  }
  @media screen and (max-width: 991px) {
    display: block;
    margin-bottom: -16px;
    margin-top: -16px;
    &:hover {
      color: #1EE5CF;
      cursor: pointer;
    }
  }
`;

export const NavLinkCustom = styled(HashLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: black;
  margin-right: 30px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: black;
    cursor: pointer;
    text-decoration: none;
    &::before {
      width: 70px;
    }
  }
  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    background-color: #1EE5CF;
    height: 7px;
    width: 0;
    transition: .3s;
    border-radius: 5px;
    @media screen and (max-width: 991px) {
      display: none;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    margin-bottom: -32px;
    text-transform: none;
    font-weight: 500;
    &:hover {
      color: #1EE5CF;
      cursor: pointer;
    }
  }
`;

export const NavLinkStyledDropdown = styled(Link)`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-left: 10px;
    &:hover {
      cursor: pointer;
      color: #1EE5CF; 
      text-decoration: none;
    }
  @media screen and (max-width: 1100px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    display: none;
    text-decoration: none;
    &:hover {
      color: #1EE5CF;
    }
  }
`;

export const NavItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen 
  and (min-width: 991px) 
  and (max-width: 1100px) {
    display: none;
  }
  &:hover {
    text-decoration: none;
  }
  img {
    width: 20px;
    height: 20px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
  }
  a {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 15px;
    font-family: 'Montserrat', sans-serif;
    &:hover {
      text-decoration: none;
    }
    @media screen and (max-width: 991px) {
      margin-left: 10px;
      margin-top: 20px;
      &:hover {
        color: #00AF66;
      }
        img {
          width: 30px;
          height: 30px;
        }
      }
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 20px;
  color: black;
  font-weight: 600;
  cursor: pointer;
    span {
      color: #1EE5CF;
      font-size: 20px;
      font-weight: 600;
      margin-left: 5px;
      text-transform: uppercase;
    }
    &:hover {
      color: black;
    }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  margin-left: auto;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
  &:focus {
    outline: none;
  }
  img {
    width: 30px;
    height: auto;
    cursor: pointer;
  }
`;
