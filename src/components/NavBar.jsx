import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import d20 from "./assets/d20.png";

const NavBarMobile = () => {
  return (
    <MDBContainer fluid>
      <MDBNavbar color="black" dark expand="md" className="nav" fixed="top">
        <MDBNavbarBrand href="/">
          <img src={d20} alt="" height="30" />
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/Menu">
              <MDBIcon icon="bars" className="white-text" size="lg" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </MDBContainer>
  );
};

export default NavBarMobile;
