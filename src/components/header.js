import React from "react"
import Navbar from "./navbar/navbar"
import { Text } from '../containers/language';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components"
import ImageDesktop from '../images/home_image.png'
import ImageMobile from '../images/home_image_mobile.png'
import RedDot from '../images/red_dot.png'
import { Container } from "@material-ui/core";

const Image = styled.img`
  height: auto;
`

const TextHeader = styled.h1`
  margin-top: 0;
  height: auto;
  font-size: 3rem;
  color: gray;

  @media (max-width: 425px) and (min-width: 320px)  {
    font-size: 1rem;
  } 

  @media (max-width: 768px) and (min-width: 426px)  {
    font-size: 2rem;
  } 
`

const TextCopy = styled.h3`
  margin-top: 0;
  color: gray;
  font-size: 2rem;
    
  @media (max-width: 425px) and (min-width: 320px)  {
    font-size: .8rem;
  } 

  @media (max-width: 768px) and (min-width: 426px)  {
    font-size: 1.4rem;
  } 
`

const ImageHeader = styled(Image)`
  @media (min-width: 320px) {
    width: 100%;
    box-sizing: border-box;
    float: right
  }
`

const ImageDot = styled(Image)`
  @media (min-width: 320px) {
    width: .5rem;
  }
`

const GridCopy = styled(Grid)`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-content: center;
  @media (max-width: 768px) {
    padding: 0 10px;
    text-align: center;
  }
`

const GridHeader = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin: 0 40px;
    @media (max-width: 769px)  {
    display: none;
  } 
` 

const GridHeaderMobile = styled(Grid)`
  display: none;
  @media (max-width: 768px)  {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
  } 
`

const Button = styled.div`
  border-radius: 30px;
  background-image: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 2px;
  padding: 2px;
  max-width: 40%;
  @media (max-width: 768px) {
    width: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
    max-width: 100%;
  }
`

const Label = styled.div`
  border: 2px transparent solid;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px;
  margin: 5px;
  text-align: center;
  @media (min-width: 320px) {
    padding: 5px;
  }
`

const ButtonText = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  background: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  @media (min-width: 320px) {
    font-size: .75rem;
  }
`

const Link = styled.a`
  color: transparent;
  text-decoration: none;
`

const Header = () => {

  return (
    <>
      <Container>
        <Navbar />
      </Container>

      <GridHeader>
        <GridCopy item xs={6}>
          <TextHeader>
            <Text tkey="header" tid="what-do" />
            <ImageDot src={RedDot}/>
          </TextHeader>
          <TextCopy>
            <Text tkey="header" tid="what-do-copy"/>
          </TextCopy>
          <Button> 
            <Label>
              <a href="#contact-us">
                <ButtonText>
                  <Link>
                    <Text tkey="header" tid="contact-us" />
                  </Link>
                </ButtonText>             
              </a>
            </Label>
          </Button>
        </GridCopy>
        <Grid item xs={6}>
          <ImageHeader src={ImageDesktop}/>
        </Grid>
      </GridHeader>


      <GridHeaderMobile>
        <GridCopy item xs={6}>
          <TextHeader>
            <Text tkey="header" tid="what-do" />
            <ImageDot src={RedDot}/>
          </TextHeader>
          <TextCopy>
            <Text tkey="header" tid="what-do-copy"/>
          </TextCopy>
          <Button> 
            <Label>
              <a href="#contact-us">
                <ButtonText>
                  <Link>
                    <Text tkey="header" tid="contact-us" />
                  </Link>
                </ButtonText>             
              </a>
            </Label>
          </Button>
        </GridCopy>
        <Grid item xs={6}>
          <ImageHeader src={ImageMobile}/>
        </Grid>
      </GridHeaderMobile>
    </>
  )
}

export default Header
