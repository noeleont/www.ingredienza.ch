import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PastaBoxPageTemplate = ({
  articleNr,
}) => (
  <section>
    {articleNr}
  </section>
)

PastaBoxPageTemplate.propTypes = {
  articleNr: PropTypes.string,
}

const PastaBoxPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang="de">
      <PastaBoxPageTemplate
        articleNr={frontmatter.articleNr}
      />
    </Layout>
  )
}

PastaBoxPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PastaBoxPage

export const pastaboxPageQuery = graphql`
  query PastaBoxPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        articleNr
        product {
          frontmatter {
            description: description_de
          }
        }
        units {
          amount
          weight
        }
        price_ep
        price_vp
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
