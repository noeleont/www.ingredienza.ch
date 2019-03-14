import React from 'react'
import Helmet from "react-helmet";
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'

import Layout from '../components/Layout'

export const FattoPageTemplate = ({
  image,
  intro,
  heading,
  subheading,
  articles,
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
      <HTMLContent className="content" content={intro} /> 
      {articles ? 
        (<ul>
          {articles.map(article => (
            <li>{article.frontmatter.description}</li>
          ))}
        </ul>) : null}
    </div>
  </div>
)

FattoPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.shape({
    frontmatter: PropTypes.shape({
      articleNr: PropTypes.string,
      description: PropTypes.string,
      unit: PropTypes.string,
      price: PropTypes.string,
    })
  })),
}

const FattoPage = ({ data }) => {
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
      <FattoPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        articles={frontmatter.articles}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

FattoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FattoPage

export const pageQuery = graphql`
query FattoPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "fatto-page"}}) {
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
        intro
        meta {
          title
          description
          keywords
        }
        articles {
          frontmatter {
            articleNr
            description
            unit
            price
          }
        }
      }
    }
  }
`
