import React from 'react'
import rehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import IndexModal from '../components/IndexModal'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "contact": Contact }
}).Compiler

export const IndexPageTemplate = ({
  image,
  imageModal,
	htmlAst,
}) => (

	<div>
		{ image ?
			<Img
				style={{
					zIndex: -1,
					position: "fixed",
					right: 0,
					bottom: 0,
					height: "100vh",
					width: "100vw",  
				}}
				fluid={image.childImageSharp.fluid}
			/> : <div />
		}
    <div>{renderAst(htmlAst)}</div> 
    <IndexModal image={imageModal} />
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
  console.log(frontmatter);

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
