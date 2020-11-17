import React from "react"
import styled from "styled-components"
import { Text } from '../containers/language';
import ClientsBackground from "../images/Clients/clients-bg.png"
import Client1 from "../images/Clients/1.svg"
import Client2 from "../images/Clients/2.png"
import Client3 from "../images/Clients/3.png"
import Client4 from "../images/Clients/4.svg"
import Client5 from "../images/Clients/5.png"
import Client6 from "../images/Clients/6.png"

const ClientsBody = styled.div`
  text-align: center;
  color: #A0A0A0;
  padding: 40px 0;
  background: url(${ClientsBackground});
  background-repeat: no-repeat;
  background-size: 150% 120%;
  background-position: center;
`

const ClientContent = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center; 
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: inherit;
  }
`

const ClientsItems = styled.div`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 60px;
`

const ClientItem = styled.div`
  margin: 0 15px;
`

const ClientImage = styled.img`
  height: 60px;
`

const ClientImageT = styled.img`
  height: 100px;
`

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Clients = () => {

  return (
    <ClientsBody>
      <Title>
        <Text tkey="clients" tid="title" />
      </Title>
      <ClientsItems>
        <ClientContent>
          <ClientItem>
            <ClientImage src={Client1} />
          </ClientItem>

          <ClientItem>
            <ClientImage src={Client2} />
          </ClientItem>

          <ClientItem>
            <ClientImage src={Client3} />
          </ClientItem>

          <ClientItem>
            <ClientImageT src={Client4} />
          </ClientItem>

          <ClientItem>
            <ClientImage src={Client5} />
          </ClientItem>

          <ClientItem>
            <ClientImageT src={Client6} />
          </ClientItem>
        </ClientContent>
      </ClientsItems>
    </ClientsBody>
  )

}


export default Clients