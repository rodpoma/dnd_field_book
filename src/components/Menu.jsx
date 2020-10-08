import React from "react";
import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";
import d20 from "./assets/d20.png";

const Menu = () => {
  return (
    <MDBContainer fluid>
      <MDBNav className="page">
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/board">
            <MDBAnimation type="fadeIn" delay=".3s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="chalkboard" /> Board
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/instructions">
            <MDBAnimation type="fadeIn" delay=".6s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="journal-whills" /> Instructions
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/">
            <MDBAnimation type="fadeIn" delay=".9s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="dice-d20" /> Dice
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <div className="flex-center white-text">
            <a href="https://www.dndbeyond.com/my-characters">
              <MDBAnimation type="fadeIn" delay="1.5s">
                <img src={d20} className="menu-logo" alt="logo" />
              </MDBAnimation>
            </a>
          </div>
        </MDBNavItem>
      </MDBNav>
    </MDBContainer>
  );
};

export default Menu;
