import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ArticlePageTemplate = ({
  articleNr,
  description,
  unit,
  price
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {description}
                </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ArticlePageTemplate.propTypes = {
  articleNr: PropTypes.string,
  description: PropTypes.string,
  unit: PropTypes.string,
  price: PropTypes.string,
}

const ArticlePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ArticlePageTemplate
        description={frontmatter.description}
        articleNr={frontmatter.articleNr}
        unit={frontmatter.unit}
        price={frontmatter.price}
      />
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArticlePage

export const articlePageQuery = graphql`
  query ArticlePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        articleNr
        description
        unit
        price
      }
    }
  }
`
