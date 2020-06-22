import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyled,
  NavLinkStyledDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLinkHide,
  NavLinkCustom
} from './styles';

import './styles.scss';

import ButtonPrimary from '../../components/PrimaryButton';


export const NavbarMain = () => {
  const history = useHistory();
  const routeChange = () => {
    history.push(`/form-old-cars`)
  };

  return (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        Developer
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled className="ml-auto">
            <NavLinkCustom to="/">HOME</NavLinkCustom>
            <NavLinkCustom to="/">ABOUT</NavLinkCustom>
            <li>
              <NavLinkStyled className='nav-item' to="#1">COURSES</NavLinkStyled>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Mobile development</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/">Frontend development</NavLinkHide>
              <NavLinkHide to="/">Backend development</NavLinkHide>
              <NavLinkHide to="/">Mobile development</NavLinkHide>
            <NavLinkStyled to="/">PRICES</NavLinkStyled>
            <ButtonPrimary btnEnrollNavbar>enroll to the course</ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;
