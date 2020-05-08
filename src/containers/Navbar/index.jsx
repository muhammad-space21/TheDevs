import React from 'react';

import { 
  Navbar,
  Form, 
  FormControl 
} from 'react-bootstrap';

import {
  Header,
  NavbarStyle,
  NavStyle,
  NavLinkStyle,
  NavDropdownStyle,
  NavDropdownItemStyle
} from './styles';


const NavbarMain = () => {
  return (
    <Header>
      <NavbarStyle bg='light' expand='lg'>
        <Navbar.Brand href="#home">FrontendMasters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavStyle className="ml-auto justify-content-end align-items-center">
            <NavLinkStyle href="#home">HOME</NavLinkStyle>
            <NavLinkStyle href="#about">ABOUT</NavLinkStyle>
            <NavLinkStyle href="#courses">COURSES</NavLinkStyle>
            <NavDropdownStyle title="PAGES" id="basic-nav-dropdown">
              <NavDropdownItemStyle href="#action/3.1">Page1</NavDropdownItemStyle>
              <NavDropdownItemStyle href="#action/3.2">Page2</NavDropdownItemStyle>
              <NavDropdownItemStyle href="#action/3.3">Page3</NavDropdownItemStyle>
            </NavDropdownStyle>
            <NavDropdownStyle title="BLOG" id="basic-nav-dropdown">
              <NavDropdownItemStyle href="#action/3.1">Page1</NavDropdownItemStyle>
              <NavDropdownItemStyle href="#action/3.2">Page2</NavDropdownItemStyle>
              <NavDropdownItemStyle href="#action/3.3">Page3</NavDropdownItemStyle>
            </NavDropdownStyle>
            <NavLinkStyle href="#link">CONTACTS</NavLinkStyle>
          </NavStyle>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </NavbarStyle>
    </Header>
  )
}

export default NavbarMain;