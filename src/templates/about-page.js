import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import { EmployeesList } from '../components/EmployeesList'

export const AboutPageTemplate = ({
  image,
  html,
  employees,
  lang,
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
		<div dangerouslySetInnerHTML={{ __html: html }} />
    <EmployeesList employees={employees} />
	</div>
)

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  employees: PropTypes.array,
  lang: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <AboutPageTemplate
        image={frontmatter.image}
        html={html}
        employees={frontmatter.employees}
        lang={frontmatter.lang}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) { 
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        lang
        meta {
          title
          description
          keywords
        }
        employees {
          name
          image {
            childImageSharp {
              fixed(width: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          description
          favorite {
            frontmatter {
              description: description_de
            }
          }
        }
      }
      html
    }
  }
`
