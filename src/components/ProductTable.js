import React from "react";
import styled from "styled-components";

const ProductRow = ({ product: { articleNr, description, unit, price } }) => (
  <tr>
    <td>{articleNr}</td>
    <td>{description}</td>
    {unit ? (
      <td>
        {String.fromCharCode(162) + " " + String.fromCharCode(224) + " " + unit}
      </td>
    ) : (
      <td />
    )}
    {// Check if string starts with a number
    !isNaN(parseInt(price)) ? <td>Fr. {price}</td> : <td>{price}</td>}
  </tr>
);

const ProductTable = styled.table`
  border: 0px;
  border-color: #000;
  
  width: 900px;
  position: relative; 
  padding: 0px;
  td {
      padding-right: 0px;
  }

  th {
      padding-right: 0px;
  }

  /* first column */
  td:nth-child(1) {
      vertical-align: top;
      width: 93px;
  }

  /* second column */
  td:nth-child(2) {
      vertical-align: top;
      width: 500px;
  }

  /* third column */
  td:nth-child(3) {  
      vertical-align: bottom;
      width: 178px;
  }

  /* fourth column */
  td:nth-child(4) {  
      vertical-align: bottom;
      width: 100px;
  }
`;

const ResponsiveTable = styled.div`
  white-space: pre-wrap;

  @media (min-width: 950px) {
      .table-module--tableResponsive--uKW8e {
            overflow-x:hidden;
            -ms-overflow-style: none;
          }
  }

  @media (max-width: 950px) {
            overflow-x:scroll;
            -ms-overflow-style: -ms-autohiding-scrollbar;
          }
      ::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 7px;
            height: 7px;
          }
      ::-webkit-scrollbar-thumb {
              border-radius: 6px;
              background-color: rgba(0,0,0,.5);
              box-shadow: 0 0 1px rgba(255,255,255,.5);
          }
  }
`;

export default ({ showHeader, products }) => (
  <ResponsiveTable>
    <ProductTable>
      <tbody>
        {showHeader ? (
          <tr>
            <th>Art.Nr</th>
            <th>Produkt</th>
            <th>Einheit</th>
            <th>Fr. / kg</th>
          </tr>
        ) : null}

        {products.map(product => (
          <ProductRow key={product.description} product={product} />
        ))}
      </tbody>

    </ProductTable>
  </ResponsiveTable>
);
