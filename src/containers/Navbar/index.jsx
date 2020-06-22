import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyled,
  NavLinkStyledDropdown,
  // NavItemStyled,
  // HR,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  // NavLinkStyledLogin,
  NavLinkHide,
  NavLinkCustom,
  // Language,
  // NavItem,
  // LinkCustom,
  NavItemStyledButton
} from './styles';

import './styles.scss';

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
            <li>
              <NavLinkStyled className='nav-item' to="#1">COURSES</NavLinkStyled>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/">Frontend</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Backend</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Mobile</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/">Frontend</NavLinkHide>
              <NavLinkHide to="/">Backend</NavLinkHide>
              <NavLinkHide to="/">Mobile</NavLinkHide>
            <NavLinkStyled to="/">CLASSES</NavLinkStyled>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;
