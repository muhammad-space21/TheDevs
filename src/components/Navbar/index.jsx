import React, { useState } from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyledDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLinkHide,
  NavLinkCustom
} from './styles';

import './styles.scss';

import LeadModalContainer from '../../containers/LeadModalContainer';
import ButtonPrimary from '../PrimaryButton';
import IconMenu from '../../assets/icons/menu-mobile.png';

export const NavbarMain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        The <span>Devs</span>
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt="menu"/>
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled className="ml-auto">
            <NavLinkCustom to="/">Home</NavLinkCustom>
            <NavLinkCustom to="/how-it-works">Process</NavLinkCustom>
            <NavLinkCustom to="/about">About</NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1">Courses</NavLinkCustom>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/courses/1">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/2">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/courses/3">Mobile development</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/courses/1">Frontend development</NavLinkHide>
              <NavLinkHide to="/courses/2">Backend development</NavLinkHide>
              <NavLinkHide to="/courses/3">Mobile development</NavLinkHide>
            <NavLinkCustom to="#3">Prices</NavLinkCustom>
            <ButtonPrimary 
              onClick={() => setShowModal(true)} 
              btnEnrollNavbar
            >
              <span>enroll to the course</span>
            </ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
        {
          showModal && (
            <LeadModalContainer callback={() => setShowModal(false)} open={showModal} />
          )
        }
    </NavbarStyled>
  );
};

export default NavbarMain;
