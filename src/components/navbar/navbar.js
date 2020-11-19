
import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import NavbarLinks from "./navbar-links"
import { Container } from "@material-ui/core"

const Navigation = styled.nav`
  height: auto;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin: 20px auto;
  z-index: 1;
  align-self: center;
  box-shadow: 0px 0px 20px 25px #fff;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 5px 10px;
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: transparent;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({handleClick, navbarOpen}) => {

  return (
    <Container>
      <Navigation>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => handleClick()}
        >
          <Hamburger open={navbarOpen} />
        </Toggle>
        <Navbox open={!navbarOpen}>
          <NavbarLinks handleClick={handleClick}/>
        </Navbox>
      </Navigation>
    </Container>
  )
}

export default Navbar