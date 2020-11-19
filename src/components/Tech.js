import React from "react"
import { Container } from "@material-ui/core"
import { Text } from '../containers/language';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components"
import ReactIcon from "../images/Tech/react.png"
import RailsIcon from "../images/Tech/rails.png"

const TechBody = styled.div`
  background: #E7E6EA; 
  color: #A0A0A0;
  padding: 120px 0 60px;
`

const TechContent = styled(Container)`
  max-width: 90% !important;
  text-align: center;
  align-items: center;
  align-content: center;
`

const TechTitle = styled.h1`
  font-size: 60px;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Space = styled.div`
  height: 15px;
  background: #130C30;
  max-width: 20%;
  margin: 40px auto;
  border-radius: 30px;

  @media (max-width: 767px) {
    max-width: 30;
    height: 7px !important;
    margin: 20px auto !important;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 50px auto 70px;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }

`

const GridItem = styled(Grid)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 60px 30px;
`

const ImageReact = styled.img`
  background-size: cover;
  width: 40%;
`

const ImageRails = styled.img`
  background-size: cover;
  width: 60%;
`

const TitleItem = styled.h1`
  font-size: 30px;
`

const Tech = () => {
  return (
    <TechBody>
      <TechContent>
        <TechTitle>
          <Text tkey="tech" tid="title" />
        </TechTitle>
        <Space />
        <Copy>
          <Text tkey="tech" tid="copy" />
        </Copy>
        <Grid container>
          <GridItem container item xs={12} md={4}>
            <ImageReact src={ReactIcon} />
            <TitleItem>
              <Text tkey="tech" tid="react" />
            </TitleItem>
          </GridItem> 
          <GridItem container item xs={12} md={4}>
            <ImageRails src={RailsIcon} />
            <TitleItem>
              <Text tkey="tech" tid="ruby-on-rails" />
            </TitleItem>
          </GridItem> 
          <GridItem container item xs={12} md={4}>
            <ImageReact src={ReactIcon} />
            <TitleItem>
              <Text tkey="tech" tid="react-native" />
            </TitleItem>
          </GridItem> 
        </Grid>
      </TechContent>
    </TechBody>
  )
}

export default Tech