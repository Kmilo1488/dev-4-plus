import React from "react"
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

const Layout = () => {
  return (
    <Body>
      <Navbar />
      <Header />
      <WhatDo />
      <Tech />
      <Dna />
      <Clients />
      <ContactUs />
      <Footer />
    </Body>
  )
}

export default Layout
