import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GlobalStyle from '../components/GlobalStyle'
import Container from '../components/Container'
import Content from '../components/Content'

const TemplateWrapper = ({ children, meta, lang }) => (
  <Container>
    <GlobalStyle />
    { meta ? 
    <Helmet>
      <html lang={lang} />
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
      lang={lang}
    />
    <Content>
      {children}
    </Content>
    <Footer lang={lang} />
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  }),
  lang: PropTypes.string.isRequired,
}
export default TemplateWrapper
