import React from "react";
import { Link } from 'gatsby'
import logo from "../img/logo.png";

import styled from "styled-components";

const Container = styled.div`
  -ms-grid-row: 5;
  -ms-grid-column: 3;
  grid-area: footer;

  display: grid;
  display: -ms-grid;

  -ms-grid-rows: 150px;
  -ms-grid-columns: 1fr 1fr;

  grid-template:
    "text logo" 150px /
    1fr 1fr;
  @media (max-width: 700px) {
    display: grid;
    display: -ms-grid;
    grid-template:
      "logo" 150px
      "text" 1em;
    -ms-grid-rows: 150px 1em;
    -ms-grid-columns: 1fr;
  }
`;

const Text = styled.div`

  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: text;

  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;

  @media (max-width: 700px) {
    -ms-grid-column-align: center;
    justify-self: center;

    -ms-grid-row: 2;
    -ms-grid-column: 1;
  }
`

const Logo = styled.img`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: logo;

  -ms-grid-column-align: end;
  justify-self: end;

  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;

  @media (max-width: 700px) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    justify-self: center;
    -ms-grid-column-align: center;
  }
`
export const FooterFr = () => (
  <Container>
    <Text>
      <Link to="/fr/impressum">
        Mentions légales 
      </Link>
      <span> | </span>
      <Link to="/fr/dataprotection">
        Protection des données
      </Link>
    </Text>
    <Logo src={logo} alt="Ingredienza Logo" />
  </Container>
);

export const Footer = () => (
  <Container>
    <Text>
      <Link to="/impressum">
        Impressum 
      </Link>
      <span> | </span>
      <Link to="/datenschutz">
       Datenschutz 
      </Link>
    </Text>
    <Logo src={logo} alt="Ingredienza Logo" />
  </Container>
)
