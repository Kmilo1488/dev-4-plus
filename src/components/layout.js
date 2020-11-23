import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "./navbar/navbar"
import Header from "./header"
import WhatDo from "./WhatDo"
import Tech from "./Tech"
import Dna from "./Dna"
import Clients from "./Clients"
import ContactUs from "./ContactUs"
import Footer from "./Footer"

const Body = styled.div`
  font-family: "Poppins", sans-serif;
`

const Content = styled.div`
  transition: all 0.3s ease-in;
  filter: ${props => (props.open ? "blur(15px) opacity(25%)" : "none")};
`

const Layout = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleClick = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <Body>
      <Navbar handleClick={handleClick} navbarOpen={ navbarOpen }/>
      <Content open={navbarOpen}>
        <Header />
        <WhatDo />
        <Tech />
        <Dna />
        <Clients />
        <ContactUs />
        <Footer />
      </Content>
    </Body>
  )
}

export default Layout
