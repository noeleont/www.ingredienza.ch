import styled from 'styled-components';

const Content = styled.div`
  -ms-grid-row: 3;
  -ms-grid-column: 3;
  grid-area: content;

  img {
    /* needed for IE9+ polyfill */
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'
  }
`;

export default Content
