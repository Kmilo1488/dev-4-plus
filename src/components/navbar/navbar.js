
import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./logo"
import NavbarLinks from "./navbar-links"
import { Container } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 5px 10px;
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
    align-items: center;
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
    background-color: white;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleClick = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <Container>
      <Navigation>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon icon={faBars} color="black" size="2x"/>
        </Toggle>
        <Navbox open={!navbarOpen}>
          <NavbarLinks handleClick={handleClick}/>
        </Navbox>
      </Navigation>
    </Container>
  )
}

export default Navbar