import styled from 'styled-components';

import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl 
} from 'react-bootstrap';

// $primary-color	: #7c32ff;
// $primary-color2	: #c738d8;
// $title-color	: #222222;
// $text-color		: #828bb2;

// $white			: #fff;
// $offwhite		: #f9f9fb;
// $black			: #222;

export const Header = styled.header`
  width: 100%;
  position: absolute;
	top: 0;
	left: 0;
  z-index: 9;
  background-color: #fff;
  box-shadow: -21.213px 21.213px 30px 0px 
    rgba(158, 158, 158, 0.3);
  -webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;

export const NavbarStyle = styled(Navbar)`
  color: #fff;
  border-color: #fff;
  padding: 25px 15px;
	&:focus {
		outline: 0px;
  }
  @media (max-width: 992px) {
		background: #222222;
		margin-top: 20px;
	}
`;

export const NavStyle = styled(Nav)`
  @media (max-width: 992px) {
		margin-top: 10px;
		height: auto;
		max-height: 400px;
		overflow-x: hidden;
	}
`;

export const NavLinkStyle = styled(Nav.Link)`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 20px;
  @media (max-width: 992px) {
    padding: 10px 0;
  }
`;

export const NavDropdownStyle = styled(NavDropdown)`
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 992px) {
    padding: 10px 0;
  }
  -webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  @media (max-width: 991px) {
		display: block;
		opacity: 1;
    visibility: visible;
    border: none;
    background: transparent;
	}
  /* &.show {
    display: block;
    opacity: 1;
    visibility: visible;
    @media (max-width: 991px) {
      background: transparent;
      box-shadow: none;
      border: 0px;
      padding: 0;
    }
  } */
  &:hover {
    @media (min-width: 992px) {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavDropdownItemStyle = styled(NavDropdown.Item)`
  color: #222222;
  padding: 10px 20px;
  font-size: 11px;
  @media (max-width: 991px) {
		display: block;
		opacity: 1;
    visibility: visible;
    border: none;
    background: transparent;
    background-color: #fff;
	}
`;