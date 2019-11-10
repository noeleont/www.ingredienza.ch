import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";


const leftMargin = '0.1em';
const mobileBreakPoint = '650px';
const desktopBreakPoint = '850px';
const between = `
  (min-width: ${mobileBreakPoint})
`;

const BoxOverviewNavigation = styled.div`
  display: grid;
  display: -ms-grid;
    
  -ms-grid-columns:          auto;
      grid-template-columns: auto;

  -ms-grid-rows:          auto auto; 
      grid-template-rows: auto auto;

  margin-bottom: 20px; 
  justify-items: center;

  white-space: pre-wrap;
  @media (min-width: ${desktopBreakPoint}) {
    -ms-grid-columns:          1fr 1fr;
        grid-template-columns: 1fr 1fr;

    -ms-grid-rows:          auto;
        grid-template-rows: auto;
  }
    
`;

const FrozenLink = styled.a`
  -ms-grid-column: 1;
      grid-column: 1;
  -ms-grid-row: 1;
      grid-row: 1;
  @media ${between} {
    margin-left: ${leftMargin};
    -ms-grid-column: 1;
        grid-column: 1;
    -ms-grid-row: 1;
        grid-row: 1;
  }
`;


const DryLink = styled.a`
  -ms-grid-column: 1;
      grid-column: 1;
  -ms-grid-row: 2;
      grid-row: 2;
  @media ${between} {
    margin-left: ${leftMargin};
    -ms-grid-column: 2;
        grid-column: 2;
    -ms-grid-row: 1;
        grid-row: 1;
  }
`;

export default props => {
  let links;
  if (props.lang === "de") {
    links = { 
      dry: {
        url: '/pasta-boxen/trocken',
      },
      frozen: {
        url: '/pasta-boxen/gefroren',
      },
    };
  }
  if (props.lang === "fr") {
    links = { 
      dry: {
        url: '/fr/pasta-boxen/sec',
      },
      frozen: {
        url: '/fr/pasta-boxen/surgelés',
      }
    };
  }
  return (
    <BoxOverviewNavigationTemplate
      links={links}
      {...props}
    />)
}
const BoxOverviewNavigationTemplate = ({ links, frozen, dry}) => (
  <BoxOverviewNavigation>
    <FrozenLink href={links.dry.url}>
      <Img fixed={dry.image.childImageSharp.fixed} />
      <h2>{dry.text}</h2>
    </FrozenLink>
    <DryLink href={links.frozen.url}>
      <Img fixed={frozen.image.childImageSharp.fixed} />
      <h2>{frozen.text}</h2>
    </DryLink>
  </BoxOverviewNavigation>
);
