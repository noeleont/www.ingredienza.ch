import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;

  -ms-grid-rows: 70px 10px auto 10px 150px;

  -ms-grid-columns: minmax(1em, 1fr) 10px minmax(0, 50em) 10px minmax(1em, 1fr);

      grid-template:
    "header header header" 70px
    ". content ." auto
    ". footer ." 150px /
    minmax(1em, 1fr) minmax(0, 50em) minmax(1em, 1fr);

  word-break: normal;

  /* Make navigation disappear */
  position:absolute;
  overflow-x:hidden;
  @media (min-width: 540px) {
    grid-gap: 50px;
    -ms-grid-rows: 70px 50px auto 50px 150px;
    -ms-grid-columns: minmax(1em, 1fr) 50px minmax(0, 50em) 50px minmax(1em, 1fr);
  }
`;

export default Container
