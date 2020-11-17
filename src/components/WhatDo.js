import React from "react"
import Container from '@material-ui/core/Container';
import { Text } from '../containers/language';
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import WhatDoImage from "../images/what_do_bg.png"
import WhatDoImageMobile from "../images/what_do_bg_mobile.png"
import DesignIcon from "../images/WhatDoItems/design.png"
import FullStackIcon from "../images/WhatDoItems/full_stack.png"
import ManagementIcon from "../images/WhatDoItems/management.png"
import qualityIcon from "../images/WhatDoItems/quality.png"
import strategyIcon from "../images/WhatDoItems/strategy.png"
import TestingIcon from "../images/WhatDoItems/testing.png"


const WhatDoBox = styled.div`
  background: linear-gradient(180deg, transparent 50%, #E7E6EA 50%);
`

const WhatDoContent = styled.div`
  background: url(${WhatDoImage});
  width:100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 220px 0;
  text-align: center;
  color: white;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    background-image: url(${WhatDoImageMobile});
    background-position: -100px center;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
`

const Title = styled.h1`
  font-size: 60px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Space = styled.div`
  height: 15px;
  background-image: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  max-width: 20%;
  margin: 70px auto;
  border-radius: 30px;

  @media (max-width: 767px) {
    height: 7px !important;
    margin: 40px auto !important;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 70px auto;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }
`

const Image = styled.img`
  background-size: cover;
  height: auto;

  @media (max-width: 767px) {
    height: 5rem;
  }
`

const GridConatiner = styled(Grid)`
  display: flex;
`

const GridItem = styled(Grid)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;

  @media (max-width: 767px) {
    padding: 20px !important;
  }
`

const TitleItem = styled.h1`
  font-size: 30px;

  @media (max-width: 767px) {
    font-size: 1.5rem !important;
  }
`

const CopyItem = styled.p`
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 1.2rem !important;
  }
`


const WhatDo = () => {
  return (
    <WhatDoBox id="what-do">
      <WhatDoContent>
        <Container>
          <Title>
            <Text tkey="what-do" tid="title" />
          </Title>
          <Space />
          <Copy>
            <Text tkey="what-do" tid="copy" />
          </Copy>
          <GridConatiner container>
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={strategyIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="product-strategy" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="product-strategy-copy" />
              </CopyItem>
            </GridItem> 
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={DesignIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="ui-ux-design" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="ui-ux-design-copy" />
              </CopyItem>
            </GridItem> 
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={TestingIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="user-research-testing" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="user-research-testing-copy" /> 
              </CopyItem>
            </GridItem> 
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={FullStackIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="full-stack-development" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="full-stack-development-copy" />
              </CopyItem>
            </GridItem> 
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={ManagementIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="project-management" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="project-management-copy" />
              </CopyItem>
            </GridItem> 
            <GridItem container item xs={12} sm={6} md={4}>
              <Image src={qualityIcon} />
              <TitleItem>
                <Text tkey="what-do" tid="quality-assurance" />
              </TitleItem>
              <CopyItem>
                <Text tkey="what-do" tid="quality-assurance-copy" />
              </CopyItem>
            </GridItem> 
          </GridConatiner>
        </Container>
      </WhatDoContent>
    </WhatDoBox>
  )
}

export default WhatDo
