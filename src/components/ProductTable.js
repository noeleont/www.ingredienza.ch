import React from "react";
import styled from "styled-components";

const ProductTable = styled.table`
  border: 0px;
  border-color: #000;
  
  max-width: 900px;
  min-width: 520px;
  position: relative; 
  padding: 0px;
  td {
    padding-right: 0px;
  }

  th {
    padding-right: 0px;
    text-align: left;

  }

  /* first column */
  td:nth-child(1) {
      vertical-align: top;
      max-width: 90px;
      min-width: 87px;
  }

  /* second column */
  td:nth-child(2) {
      vertical-align: top;
      min-width: 400px;
      width: 500px;
  }

  /* third column */
  td:nth-child(3) {  
      vertical-align: bottom;
      min-width: 130px;
  }

  /* fourth column */
  td:nth-child(4) {  
      vertical-align: bottom;
      min-width: 65px;
      width: 100px;
  }
`;

const ResponsiveTable = styled.div`
  white-space: pre-wrap;

  /* Fixes iOS text resize issues */
  -webkit-text-size-adjust: 100%;

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


const TableHeader = ({ lang }) => {
  return lang === "de" ? (<TableHeaderDe />) : (<TableHeaderFr />)
} 


const TableHeaderDe = () => (
  <tr>
    <th>Art.Nr</th>
    <th>Produkt</th>
    <th>Einheit</th>
    <th>Fr. / kg</th>
  </tr>
)

const TableHeaderFr = () => (
  <tr>
    <th>Réf.</th>
    <th>Produit</th>
    <th>Unité</th>
    <th>fr. / kg</th>
  </tr>
)

const ProductRow = ({ product, lang }) => {
  return lang === "de" ? 
    (<ProductRowDe product={product}/>) : 
    (<ProductRowFr product={product}/>) 
};



const ProductRowDe = ({ product: { showArticleNr, articleNr, description, unit, price } }) => (
  <tr>
    {showArticleNr ? (<td> {articleNr} </td>) : (<td />)}
    <td>{description}</td>
    {unit ? (<td>{`¢ à ${unit}kg TK`}</td>) : (<td />)}
    {// Check if string starts with a number
    !isNaN(parseInt(price)) ? <td>Fr. {price}</td> : <td>{price}</td>}
  </tr>
);

const ProductRowFr = ({ product: { showArticleNr, articleNr, description, unit, price } }) => (
  <tr>
    {showArticleNr ? (<td> {articleNr} </td>) : (<td />)}
    <td>{description}</td>
    {unit ? (<td>{`¢ de ${unit} kg surg`}</td>) : (<td />)}
    {// Check if string starts with a number
    !isNaN(parseInt(price)) ? <td>fr. {price}</td> : <td>{price}</td>}
  </tr>
);

export default ({ showHeader, products, lang }) => (
  <ResponsiveTable>
    <ProductTable>
      <tbody>
        {showHeader ? (
          <TableHeader lang={lang} />
        ) : null}

        {products.map(product => (
          <ProductRow key={product.description} product={product} lang={lang} />
        ))}
      </tbody>

    </ProductTable>
  </ResponsiveTable>
);
