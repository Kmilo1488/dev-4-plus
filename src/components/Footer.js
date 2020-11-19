import React from "react"
import styled from "styled-components"
import { Text } from '../containers/language';
import FooterBgMObile from "../images/Footer/footer-bg-mobile.png"
import FooterBg from "../images/Footer/footer-bg.png"
import LogoWhite from "../images/logo-w.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
  background: url(${FooterBg});
  width:100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 120px 0 30px;

  @media (max-width: 1024px) and (min-width: 768px) {
    background-image: url(${FooterBg});
    background-position: -80px center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    padding: 90px 0 30px;
    width: 100%;
    height: 40%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    background-image: url(${FooterBgMObile});
    background-position: -100px center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    padding: 90px 0 30px;
    width: 100%;
    height: 40%;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  margin: 180px 0;

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 80px 0;;
  }
`

const LogoAndIcons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;


  @media (max-width: 767px) {
    flex-direction: column;

  }
`

const Logo = styled.img`
  width: 140px;
  margin: 20px;
`

const IconsMobile = styled.div` 
  display: flex;
  margin: 20px;

  @media (min-width: 767px) {
    display: none;
  }
`

const Icons = styled.div` 
  display: none;

  @media (min-width: 767px) {
    display: flex;
    margin-top: 50px;
  }
`

const Icon = styled.div`
  margin: 0 20px;
`

const FooterMenuMobile = styled.div`
  display: flex;
  margin: 20px;

  @media (min-width: 767px) {
    display: none;
  }
`

const FooterMenu = styled.div`
  display: none;
  
  @media (min-width: 767px) {
    display: block;
    margin: 20px 0;
  }
`

const FooterMenuItem = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 767px) {
    font-size: 20px;
  }
`

const FooterCopy = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: #B8B9BF;
  font-size: 18px;
  @media (min-width: 767px) {
    margin-top: 80px;
  }
`

const Footer = () => {

  return (
    <FooterContainer>
      <FooterContent>
        <LogoAndIcons>
          <Logo src={LogoWhite} />
          <IconsMobile>
            <Icon>
              <FontAwesomeIcon icon={faLinkedinIn} color="white" size="3x"/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faInstagram} color="white" size="3x"/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faTwitter} color="white" size="3x"/>
            </Icon>        
          </IconsMobile>
          
          <FooterMenu>
            <FooterMenuItem href="#dna">
              <Text tkey="footer" tid="we" />
              </FooterMenuItem>
            <FooterMenuItem href="#what-do">
              <Text tkey="footer" tid="services" />
            </FooterMenuItem>
            <FooterMenuItem href="#contact-us">
              <Text tkey="footer" tid="contact" />
            </FooterMenuItem>        
          </FooterMenu>
        </LogoAndIcons>
          
        <FooterMenuMobile>
          <FooterMenuItem href="#dna">
            <Text tkey="footer" tid="we" />
            </FooterMenuItem>
          <FooterMenuItem href="#what-do">
            <Text tkey="footer" tid="services" />
          </FooterMenuItem>
          <FooterMenuItem href="#contact-us">
            <Text tkey="footer" tid="contact" />
          </FooterMenuItem>    
        </FooterMenuMobile>

        <Icons>
          <Icon>
            <FontAwesomeIcon icon={faLinkedinIn} color="white" size="3x"/>
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faInstagram} color="white" size="3x"/>
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faTwitter} color="white" size="3x"/>
          </Icon>        
        </Icons>     
      </FooterContent>

      <FooterCopy>
        <p><Text tkey="footer" tid="copy-1" /></p>
        <p><Text tkey="footer" tid="copy-2" /></p>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer