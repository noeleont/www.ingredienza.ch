import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import BoxOverviewNav from '../components/BoxOverviewNav'

export const BoxOverviewPageTemplate = ({
  image,
  dry,
  frozen,
  html,
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
    <BoxOverviewNav lang={lang} dry={dry} frozen={frozen}/>
  </div>
)

BoxOverviewPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  lang: PropTypes.string,
}

const BoxOverviewPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { dry, frozen} = frontmatter;

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <BoxOverviewPageTemplate
        image={frontmatter.image}
        dry={dry}
        frozen={frozen}
        html={html}
        lang={frontmatter.lang}
      />
    </Layout>
  )
}

BoxOverviewPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BoxOverviewPage

export const pageQuery = graphql`
query BoxOverviewPageTemplate($id: String!) {
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
        meta {
          title
          description
          keywords
        }
        frozen {
          image {
            childImageSharp {
              fixed(width: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          text
        }
        dry {
          image {
            childImageSharp {
              fixed(width: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          text
        }
      }
      html
    }
  }
`
