import React from "react";
import { PropTypes } from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components" 

import seal from "../img/bestswiss.png";

const Header = styled.header`
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  -ms-grid-column-span: 5;
  grid-area: header;

  display: -ms-grid; 
  display: grid;
  -ms-grid-rows: 70px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
      grid-template:
    " language . . toggle " 70px /
    1fr 1fr 1fr 1fr;

  width: 100%;  
  -ms-grid-column-align: center;  
      justify-self: center;  
  z-index: 10000;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  a {
    text-decoration: none;
    font-size: 20px;
    color: #000;
    
    transition: all 0.3s ease;
    border-bottom: .1rem solid transparent;
  }
`;

const Navigation = styled.nav`
  -ms-grid-row: 1;
  -ms-grid-column: 4;
  -ms-grid-column-align: end;
      justify-self: end;
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
  grid-area: toggle;
  height: 100vh;
`;

const LanguageSelector = styled.div`
  margin-left: 20px;
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: language;
  -ms-grid-column-align: start;
      justify-self: start;
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
  > a {
    text-decoration: none;
    font-size: 20px;
    color: #000;
    
    transition: all 0.3s ease;
    border-bottom: .1rem solid transparent;
  }
  > a:hover {
    border-bottom-color: rgba( 0, 0, 0, .35 );
  }
`;

const Toggle = styled.div`
  display: block;
  position: absolute;
  top: 25px;
  right: 30px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  > input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    
    cursor: pointer;
    
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
  }

  > span {
      display: block;
      width: 25px;
      height: 3px;
      margin-bottom: 3px;
      position: relative;
      
      background: black;
      border-radius: 2px;
      
      z-index: 1;
      
      -webkit-transform-origin: 4px 0px;
      
              transform-origin: 4px 0px;
      
      transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease,
                    -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease,
                    -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  > span:first-child {
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
  }

  > span:nth-last-child(2) {
      -webkit-transform-origin: 0% 100%;
              transform-origin: 0% 100%;
  }
  > input:checked ~ span {
      opacity: 1;
      -webkit-transform: rotate(45deg) translate(-2px, -1px);
              transform: rotate(45deg) translate(-2px, -1px);
  }
  > input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    -webkit-transform: rotate(0deg) scale(0.2, 0.2);
            transform: rotate(0deg) scale(0.2, 0.2);
  }

  > input:checked ~ span:nth-last-child(2) {
      opacity: 1;
      -webkit-transform: rotate(-45deg) translate(0, 0);
              transform: rotate(-45deg) translate(0, 0);
  }

  > input:checked ~ ul {
      -webkit-transform: scale(1.0, 1.0);
              transform: scale(1.0, 1.0);
      opacity: 1;
  }

`;

const Menu = styled.ul`
  position: absolute;
  width: 250px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;
  
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  -webkit-transform-origin: 0% 0%;
  
          transform-origin: 0% 0%;
  -webkit-transform: translate(100%, 0);
          transform: translate(100%, 0);
  
  transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  li {
      display: table;
      padding: 20px 0 0 0;
      font-size: 22px;
      transition: all 0.3s ease;
      border-bottom: .1rem solid transparent;
  }
  li:hover  {
      border-bottom-color: rgba( 0, 0, 0, .35 );
  }
`;

const Seal = styled.img`
  height: 100px;
  width: 100px;
  margin-top: -20px;
`;


export default props => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              nav {
                de {
                  main {
                    to
                    text
                  }
                }
                fr {
                  main {
                    to
                    text
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
        return (<HeaderTemplate links={de.main} {...props} />)
      if (props.lang === "fr")
        return (<HeaderTemplate links={fr.main} {...props} />)
    }}
  />
)

const HeaderTemplate = ({ links }) => (
  <Header>
    <LanguageSelector>
      <Link to="/">De</Link>  <span> | </span> <Link to="/fr">Fr</Link>
    </LanguageSelector>
    <Navigation>
      <Toggle>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <Menu>
          {links.map(link =>(
            <li>
              <Link to={link.to} key={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://bestswiss.ch/marken/ingredienza">
              <Seal src={seal} alt="Best of Swiss Logo" />
            </a>
          </li>
        </Menu>
      </Toggle>
    </Navigation>
  </Header>
);

HeaderTemplate.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}
