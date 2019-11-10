import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import Img from 'gatsby-image'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GlobalStyle from '../components/GlobalStyle'
import Container from '../components/Container'
import Content from '../components/Content'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#___gatsby');

const TemplateWrapper = ({ children, meta, lang, modalIsOpen, modalClose, modalImage}) => (
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
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalClose}
        contentLabel=""
        style={customStyles}
    >
      {modalImage ? <Img fixed={modalImage} /> : <div /> }
      <a style={{ cursor: 'pointer', }} onClick={modalClose} aria-label="Close Pasta Modal">&times;</a>
    </Modal>   
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

const mapStateToProps = ({ modalIsOpen, image }) => {
  return { modalIsOpen, modalImage: image}
}

const mapDispatchToProps = dispatch => {
  return { modalClose: () => dispatch({ type: `CLOSE_MODAL` }) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateWrapper);
