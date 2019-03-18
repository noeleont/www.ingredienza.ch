import React from 'react'
import Helmet from "react-helmet";
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const PricelistPageTemplate = ({
  image,
  heading,
  subheading,
}) => (
    <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
    >
  <div style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column' }}>
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {heading}
      </h1>
      <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
      >
        {subheading}
      </h3>
      </div>
    </div>
  </div>
)

PricelistPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  pricelist_pdf: PropTypes.string,
}

const PricelistPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { meta } = frontmatter;

  return (
    <Layout>
      <Helmet
        title={meta.title}
        meta={[
          {
            name: "description",
            content: `${meta.description}`
          },
          {
            name: "keywords",
            content: `${meta.keywords}`
          }
        ]}
      />
      <PricelistPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        pricelist_pdf={frontmatter.pricelist_pdf}
      />
    </Layout>
  )
}

PricelistPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricelistPage

export const pageQuery = graphql`
query PricelistPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "pricelist-page"}}) {
      frontmatter {
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
        pricelist_pdf
      }
      html
    }
  }
`
