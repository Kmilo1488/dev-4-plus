import React, { Fragment } from "react"
import { Container } from "@material-ui/core"
import { Text } from '../containers/language';
import styled from "styled-components"
import ParticlesImg from "../images/Dna/particles.png"
import ParticlesLImgMobile from "../images/Dna/particlesLMobile.png"
import ParticlesRImgMobile from "../images/Dna/particlesRMobile.png"
import Image1 from "../images/Dna/1.png"
import Image2 from "../images/Dna/2.png"
import Image3 from "../images/Dna/3.png"
import Image4 from "../images/Dna/4.png"
import Image5 from "../images/Dna/5.png"


const ImageItemR = styled.img`
  @media (min-width: 320px) {
    width: 25%;
    height: 100%;
    margin-left: 20px;
  }
`

const ImageItemL = styled.img`
  @media (min-width: 320px) {
    width: 25%;
    height: 100%;
    margin-right: 20px;
  }
`

const DnaContainer = styled(Container)`
  text-align: center;
  color: #A0A0A0;
  margin-top: 140px;
`

const DnaContentH = styled.div`
  display: flex;
  background: url(${ParticlesImg});
  width: 100%, 100%;
  height: 100%, 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 180px 0;
  margin: 200px 0;
  text-align: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`

const DnaContentV = styled.div`
  display: none;
  margin: 60px 0;
  background-image: url(${ParticlesLImgMobile}), url(${ParticlesRImgMobile});
  background-size: auto 120%;
  background-repeat: no-repeat;
  background-position: left center, right center;
  padding: 100px 0;
  text-align: center;
  @media (max-width: 768px) and (min-width: 320px) {
    display: block;
  } 
`

const DnaItem = styled.div`
  position: relative;
  margin: 40px 0;
`

const DnaItemR = styled.div`
  @media (max-width: 768px) and (min-width: 320px) {
    padding: 20px 0;
    display: flex;
    margin: 0px;
    justify-content: flex-end;
    align-items: center;
  }
`

const DnaItemL = styled.div`
  @media (max-width: 768px) and (min-width: 320px) {
    padding: 20px 0;
    display: flex;
    margin: 0px;
    justify-content: flex-start;
    align-items: center;
  }
`

const DnaImage = styled.div`
  position: relative;
  height: 100%;
  margin: 20px;
`

const Dot = styled.div`
  background: #EE2B3B;
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const Dot2 = styled(Dot)`
  background: #EE262E;
`

const Dot3 = styled(Dot)`
  background: #E11D25;
`

const Dot4 = styled(Dot)`
  background: #C01E24;
`

const Dot5 = styled(Dot)`
  background: #A01A20;
`

const LineUp = styled.div`
  position: absolute;
  background: #EE2B3B;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 7px;
  height: 200px;
  `

const LineUp2 = styled(LineUp)`
  background: #E11D25;
`

const LineUp3 = styled(LineUp)`
  background: #A01A20;
`

const LineBottom = styled.div`
  position: absolute;
  background: #EE262E;
  left: 50%;
  transform: translate(-50%, 50px);
  width: 7px;
  height: 200px;
`

const LineBottom2 = styled(LineBottom)`
  background: #C01E24;;
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
  margin: 40px auto;
  border-radius: 30px;

  @media (max-width: 767px) {
    max-width: 30%;
    height: 7px !important;
    margin: 20px auto !important;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 50px auto 70px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }
`

const DnaTextUp = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100%;
  padding-bottom: 200px;
  width: 240px;
  transform: translate(-50%, 0);
`

const DnaTextBottom = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  width: 240px;
  padding-top: 180px;
  transform: translate(-50%, 0);
`

const DnaTextRight = styled.div`
  @media (max-width: 768px) and (min-width: 320px) {
    transform: translate(0, 0) !important;
  } 
`

const DnaTextLeft = styled.div`
  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 60%;
    transform: translate(0, 0) !important;
  } 
`

const TitleItem = styled.h1`
  color: black;
  width: 240px;
  @media (min-width: 320px) {
    font-size: 20px;
    width: auto;
  }

  @media (max-width: 600px) and (min-width: 425px) {
    font-size: 30px;
  } 

  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 50px;
  } 
`

const CopyItem = styled.p`
  color: black;
  width: 240px;
  @media (min-width: 320px) {
    font-size: 16px;
    width: auto;
  }

  @media (max-width: 600px) and (min-width: 425px) {
    font-size: 20px;
  } 

  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 32px;
  } 
`

const Dna = () => {
  return (
    <Fragment>
      <DnaContainer id="dna">
        <Title>
          <Text tkey="dna" tid="title" />
        </Title>
        <Space />
        <Copy>
          <Text tkey="dna" tid="copy" />
        </Copy>
      </DnaContainer>

      <DnaContentH>
        <DnaItem>
          <DnaTextUp>
            <TitleItem>
              <Text tkey="dna" tid="title-item-1" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-1" />
            </CopyItem>
          </DnaTextUp>

          <DnaImage>
            <Dot>
              <LineUp />
            </Dot> 
          </DnaImage>
        </DnaItem>

        <DnaItem>
          <DnaTextBottom>
            <TitleItem>
              <Text tkey="dna" tid="title-item-2" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-2" />
            </CopyItem>
          </DnaTextBottom>

          <DnaImage>
            <Dot2>
              <LineBottom />
            </Dot2> 
          </DnaImage>
        </DnaItem>

        <DnaItem>
          <DnaTextUp>
            <TitleItem>
              <Text tkey="dna" tid="title-item-3" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-3" />
            </CopyItem>
          </DnaTextUp>

          <DnaImage>
            <Dot3>
              <LineUp2 />
            </Dot3> 
          </DnaImage>
        </DnaItem>

        <DnaItem>
          <DnaTextBottom>
            <TitleItem>
              <Text tkey="dna" tid="title-item-4" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-4" />
            </CopyItem>
          </DnaTextBottom>

          <DnaImage>
            <Dot4>
              <LineBottom2 />
            </Dot4> 
          </DnaImage>
        </DnaItem>

        <DnaItem>
          <DnaTextUp>
            <TitleItem>
              <Text tkey="dna" tid="title-item-5" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-5" />
            </CopyItem>
          </DnaTextUp>

          <DnaImage>
            <Dot5>
            <LineUp3 />
            </Dot5> 
          </DnaImage>
        </DnaItem>
      </DnaContentH>
      
      <DnaContentV>
        <DnaItemR>
          <DnaTextRight>
            <TitleItem>
              <Text tkey="dna" tid="title-item-1" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-1" />
            </CopyItem>
          </DnaTextRight>

          <ImageItemR src={Image1} />
        </DnaItemR>

        <DnaItemL>
          <ImageItemL src={Image2} />
          
          <DnaTextLeft>            
            <TitleItem>
              <Text tkey="dna" tid="title-item-2" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-2" />
            </CopyItem>
          </DnaTextLeft>
        </DnaItemL>

        <DnaItemR>
          <DnaTextRight>            
            <TitleItem>
              <Text tkey="dna" tid="title-item-3" />
            </TitleItem>
            <CopyItem>
            < Text tkey="dna" tid="copy-item-3" />
            </CopyItem>
          </DnaTextRight>

          <ImageItemR src={Image3} />
        </DnaItemR>

        <DnaItemL>
          <ImageItemL src={Image4} />

          <DnaTextLeft>            
            <TitleItem>
              <Text tkey="dna" tid="title-item-4" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-4" />
            </CopyItem>
          </DnaTextLeft>
        </DnaItemL>

        <DnaItemR>
          <DnaTextRight>            
            <TitleItem>
              <Text tkey="dna" tid="title-item-5" />
            </TitleItem>
            <CopyItem>
              <Text tkey="dna" tid="copy-item-5" />
            </CopyItem>
          </DnaTextRight>

          <ImageItemR src={Image5} />
        </DnaItemR>
      </DnaContentV>
    </Fragment>
  )
}

export default Dna