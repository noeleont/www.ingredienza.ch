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
    { places.map(place => (
      <Location key={place.name} {...place} lang={lang} />
    )) }
	</div>
)

PlacesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  places: PropTypes.array,
  lang: PropTypes.string,
}

const PlacesPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <PlacesPageTemplate
        image={frontmatter.image}
        html={html}
        places={frontmatter.places}
        lang={frontmatter.lang}
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
query PlacesPageTemplate($id: String!) {
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
