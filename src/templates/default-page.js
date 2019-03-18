import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
	html,
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
				fluid={img.childImageSharp.fluid}
			/> : <div />
		}
		<h1> {heading} </h1>
		<h2> {subheading} </h2>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
	html: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
				html={html}
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
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        meta {
          title
          description
          keywords
        }
      }
      html
    }
  }
`
