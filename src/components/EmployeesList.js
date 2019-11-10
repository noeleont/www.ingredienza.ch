import React from "react";
import Img from "gatsby-image";

import styled from "styled-components";

const leftMargin = '0.1em';
const mobileBreakPoint = '650px';
const desktopBreakPoint = '850px';
const between = `
  (min-width: ${mobileBreakPoint}) and 
  (max-width: calc(${desktopBreakPoint} - 1px))
`;

const Container = styled.div`
  display: -ms-grid;
  display: grid;

  -ms-grid-columns:          auto;
      grid-template-columns: auto;

  -ms-grid-rows:          auto auto auto; 
      grid-template-rows: auto auto auto;

  margin-bottom: 20px; 
  justify-content: space-between; 

  white-space: pre-wrap;
  @media (min-width: ${desktopBreakPoint}) {
    -ms-grid-columns:          300px 300px;
        grid-template-columns: 300px 300px;
    grid-column-gap: 50px;

    -ms-grid-rows:          auto auto;
        grid-template-rows: auto auto;
  }
`;


const ListItem = styled.div`
  display: -ms-grid;
  display: grid;

  -ms-grid-columns:          auto;
      grid-template-columns: auto;

  -ms-grid-rows:          auto auto auto; 
      grid-template-rows: auto auto auto;

  margin-bottom: 20px; 
  align-content: flex-start;


  white-space: pre-wrap;
  @media ${between} {
    -ms-grid-columns:          1fr 1fr;
        grid-template-columns: 1fr 1fr;

    -ms-grid-rows:          auto auto;
        grid-template-rows: auto auto;
  

`;


const Name = styled.h2`
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

const Description = styled.p`
  -ms-grid-column: 1;
      grid-column: 1;
  -ms-grid-row: 3;
      grid-row: 3;
  @media ${between} {
    margin-left: ${leftMargin};
    -ms-grid-column: 2;
        grid-column: 2;
    -ms-grid-row: 2;
        grid-row: 2;
  }
`;

const Favorite = styled.p`
  font-style:italic;
  font-size: small;
`;

const Avatar = styled(Img)`
  -ms-grid-column: 1;
      grid-column: 1;
  -ms-grid-row: 1;
      grid-row: 1;
  @media ${between} {
    -ms-grid-column: 1;
        grid-column: 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
        grid-row: 1 / 4;
  }
`;



export const EmployeesList = ({ employees }) => {
  return (
  <Container>
    {employees.map( ({name, image, description, favorite}) => (
      <ListItem key={name}>
        <Avatar fixed={image.childImageSharp.fixed}/>
        <Name>{name}</Name>
        <Description>
          {description}
          <Favorite>Lieblinge: {favorite.frontmatter.description}</Favorite>
        </Description>
      </ListItem>))}
  </Container>
)}

