import React from "react"
import { createGlobalStyle } from 'styled-components'
import { LanguageProvider } from '../containers/language';
import Layout from "../components/layout"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const IndexPage = () => (
  <LanguageProvider>
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
      </Layout>
    </LanguageProvider>
)

export default IndexPage
