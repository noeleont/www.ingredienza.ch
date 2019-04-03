import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ProductNavigation = styled.div`
    display: block;
    padding-top: 0px;
    li {
        display: block;
        letter-spacing: -0.025em;
        line-height: 1.1;
        width: 100%;
    }
    li + li {
        margin-top: 20px;
    }
`;

export default props => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              nav {
                de {
                  sub {
                    heading
                    links {
                      to
                      text
                    }
                  }
                }
                fr {
                  sub {
                    heading
                    links {
                      to
                      text
                    }
                  }
                }
              }
            }
          }
        }

      `}
    render={data => {
      const { de, fr } = data.site.siteMetadata.nav
      if (props.lang === "de")
        return (
          <ProductNavigationTemplate
            heading={de.sub.heading}
            links={de.sub.links}
            {...props}
          />)
      if (props.lang === "fr")
        return (
          <ProductNavigationTemplate
            heading={fr.sub.heading}
            links={fr.sub.links}
            {...props}
          />)
    }}
  />
)
const ProductNavigationTemplate = ({ links, heading }) => (
  <ProductNavigation>
    <h2><div dangerouslySetInnerHTML={{ __html: heading }} /></h2>
    <ul>
      {links.map(link => (
        <li>
        <Link key={link.to} to={link.to}>
          {link.text}
        </Link>
        </li>
      ))}
    </ul>
  </ProductNavigation>
);
