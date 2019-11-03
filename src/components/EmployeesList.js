import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto;
      grid-template-columns: auto;

  -ms-grid-rows:
    auto auto auto;

      grid-template-rows:
    auto auto auto;

  margin-bottom: 20px; 

  white-space: pre-wrap;
  @media (min-width: 650px) {
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;

    -ms-grid-rows: auto auto;

        grid-template-rows: auto auto;
  }
`;

const Name = styled.div`
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 1;
  grid-row: 1;
  @media (min-width: 650px) {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
`;

const Address = styled.div`
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 2;
  grid-row: 2;
  @media (min-width: 650px) {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
  }
`;

const Hours = styled.div`
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 3;
  grid-row: 3;

  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto auto;
      grid-template-columns: auto auto;

  -ms-grid-rows:
    auto auto auto auto;

      grid-template-rows:
    auto auto auto auto;
  @media (min-width: 650px) {
    grid-column: 1 / 3;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    -ms-grid-row: 2;
    grid-row: 2;

    display: -ms-grid;
    display: grid;

    -ms-grid-columns: 4fr 1fr 3fr;
        grid-template-columns: 4fr 1fr 3fr;

    -ms-grid-rows:
      auto auto auto;

    grid-template-rows:
      auto auto auto;
  }
`;

const HoursDescription = styled.div`
  grid-column: 1 / 3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  -ms-grid-row: 1;
  grid-row: 1;
  @media (min-width: 650px) {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
`;

const Info = styled.div`
  grid-column: 1 / 3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  -ms-grid-row: 4;
  grid-row: 4;
  @media (min-width: 650px) {
    grid-column: 2 / 4;
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
    -ms-grid-row: 3;
    grid-row: 3;
  }
`;

const WeekDescription = styled.div`
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 2;
  grid-row: 2;
  @media (min-width: 650px) {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
  }
`;

const WeekHours = styled.div`
  white-space: pre-line;
  display: block;
  -ms-grid-column: 2;
  grid-column: 2;
  -ms-grid-row: 2;
  grid-row: 2;
  @media (min-width: 650px) {
    -ms-grid-column: 3;
    grid-column: 3;
    -ms-grid-row: 1;
    grid-row: 1;
  }
`;

const WeekendDescription = styled.div`
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 3;
  grid-row: 3;
  @media (min-width: 650px) {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 2;
    grid-row: 2;
  }
`;

const WeekendHours = styled.div`
  white-space: pre-line;
  -ms-grid-column: 2;
  grid-column: 2;
  -ms-grid-row: 3;
  grid-row: 3;
  @media (min-width: 650px) {
    -ms-grid-column: 3;
    grid-column: 3;
    -ms-grid-row: 2;
    grid-row: 2;
  }
`;

export const EmployeesList = ({ employees  }) => {
  return (
  <Container>
    {employees.map( ({name, image, description }) => (
      <div key={name}> {name} </div>))}
  </Container>
)}

