import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ArticlePageTemplate = ({
  articleNr,
  description,
  unit,
  price
}) => (
  <section>
    {description}
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
