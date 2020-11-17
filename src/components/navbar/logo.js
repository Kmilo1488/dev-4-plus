import React from "react"
import styled from "styled-components"
import LogoImage from "../../images/logo.png"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Img = styled.img`
  height: 60px;
`

const Logo = () => {

  return (
    <LogoWrap>
      <Img src={LogoImage} alt="logo" />
    </LogoWrap>
  )
}

export default Logo
