import React from "react";
import { Link } from "gatsby";
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

export default ({ links }) => (
  <ProductNavigation>
    <h2> Unsere Produkt&shy;kategorien </h2>
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
