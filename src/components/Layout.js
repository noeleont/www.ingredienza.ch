import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'

import GlobalStyle from '../components/GlobalStyle'
import Container from '../components/Container'
import Content from '../components/Content'

const TemplateWrapper = ({ children, meta }) => (
  <Container>
    <GlobalStyle />
    { meta ? 
    <Helmet>
      <html lang="de" />
      <title>{meta.title}</title>
      <meta
        name="description"
        content={meta.description}
      />
      <meta
        name="keywords"
        content={meta.keywords}
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:url" content="/" />
    </Helmet> : null }
    <Navbar
      links={[
        { to: "/", text: "Home" },
        { to: "/standorte", text: "Standorte" },
        { to: "/produkte/", text: "Produkte" },
        { to: "/preisliste/", text: "Preisliste" },
        { to: "/konditionen", text: "Konditionen" },
        { to: "/kontakt", text: "Kontakt" },
        { to: "/links", text: "Links" }
      ]}
    />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  }),
}
export default TemplateWrapper
