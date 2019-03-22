import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import { Location } from '../components/Location'

export const PlacesPageTemplate = ({
  image,
  html,
  places,
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
    { places.map(place => (
      <Location key={place.name} {...place}
      />
    )) }
	</div>
)

PlacesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  places: PropTypes.array,
}

const PlacesPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <PlacesPageTemplate
        image={frontmatter.image}
        html={html}
        places={frontmatter.places}
      />
    </Layout>
  )
}

PlacesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PlacesPage

export const pageQuery = graphql`
query PlacesPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "places-page"}}) {
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
        places {
          address
          info
          name
          week {
            days
            hours
          }
          weekend {
            days
            hours
          }
        }
      }
      html
    }
  }
`
