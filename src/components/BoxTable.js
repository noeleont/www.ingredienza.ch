import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { connect } from "react-redux";

const ProductTable = styled.table`
  border: 0px;
  border-color: #000;
  
  max-width: 900px;
  min-width: 520px;
  position: relative; 
  padding-top: 20px;
  td {
    padding-right: 10px;
    padding-bottom: 10px;
  }

  th {
    padding-right: 5px;
    padding-bottom: 10px;
    text-align: left;

  }
  

  td:nth-child(1) {
      max-width: 90px;
      min-width: 87px;
    img {
      cursor: pointer;
    }
  }

  /* first column */

  /* second column */
  td:nth-child(2) {
      min-width: 400px;
      width: 500px;
  }

  /* third column */
  td:nth-child(3) {  
      min-width: 130px;
  }

  /* fourth column */
  td:nth-child(4) {  
      min-width: 90px;
      width: 100px;
  }
  td:nth-child(5) {  
      min-width: 90px;
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
    <th>Bezeichnung</th>
    <th>Mengeneinheit</th>
    <th>EP pro Box</th>
    <th>VP pro Box</th>
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

const ProductRow = ({ product, lang, openModal }) => {
  return lang === "de" ? 
    (<ProductRowDe product={product} openModal={openModal} />) : 
    (<ProductRowFr product={product} openModal={openModal} />) 
};

const mapDispatchToProps = dispatch => {
  return { openModal: (image) => dispatch({ type: `OPEN_MODAL`, image })}
}

const ConnectedRow = connect(
  () => ({}),
  mapDispatchToProps,
)(ProductRow)


const ProductRowDe = ({ product: { image, articleNr, product, units, price_ep, price_vp }, openModal }) => (
  <tr>
    { image ? 
    <td onClick={() => openModal(image.childImageSharp.modal)}>
      <Img fixed={image.childImageSharp.fixed} /> 
      <br />
      {articleNr}
    </td> : <td>{articleNr}</td> }
    <td>{product.frontmatter.description}</td>
    <td>{units.amount} Boxen à {units.weight}</td>
    <td>CHF {price_ep}</td>
    <td>CHF {price_vp}</td>
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

        {products
          .filter(product => product !== undefined)
            .map(product => (
          <ConnectedRow key={product.description} product={product} lang={lang} />
        ))}
      </tbody>

    </ProductTable>
  </ResponsiveTable>
);


