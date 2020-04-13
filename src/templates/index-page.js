import React from 'react'
import rehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import IndexModal from '../components/IndexModal'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "contact": Contact }
}).Compiler

// Always show a bottom border for download link
const Content = styled.div`
  a {
    text-decoration: none;
    border-bottom: .1rem solid rgba( 0, 0, 0, .35 );
    color: #000;
  }
`

export const IndexPageTemplate = ({
  image,
  imageModal,
	htmlAst,
}) => (

	<div>
		{ imageModal ?
			<Img fluid={imageModal.childImageSharp.fluid} /> : <div />
		}
    <Content>{renderAst(htmlAst)}</Content> 
	</div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  lang: PropTypes.string,
  title: PropTypes.string,
	htmlAst: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter, htmlAst } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <IndexPageTemplate
        image={frontmatter.image}
        imageModal={frontmatter.modalImage}
        title={frontmatter.title}
				htmlAst={htmlAst}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        lang
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        modalImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meta {
          title
          description
          keywords
        }
      }
      htmlAst
    }
  }
`
