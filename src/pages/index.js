import React from "react"

import { LanguageProvider } from '../containers/language';
import Layout from "../components/layout"
import SEO from "../components/seo"

document.body.style.margin = "0px";

const IndexPage = () => (
  <LanguageProvider>
    <Layout>
      <SEO title="Home" />
    </Layout>
  </LanguageProvider>
)

export default IndexPage
