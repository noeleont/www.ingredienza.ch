import React from 'react'
import rehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import Contact from '../components/Contact'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "contact": Contact }
}).Compiler

export const DefaultPageTemplate = ({
  image,
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
	</div>
)

DefaultPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
	htmlAst: PropTypes.object,
}

const DefaultPage = ({ data }) => {
  const { frontmatter, htmlAst } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <DefaultPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
				htmlAst={htmlAst}
      />
    </Layout>
  )
}

DefaultPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
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
