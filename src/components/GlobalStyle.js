import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;

    font-family: 'Libre Franklin','Helvetica Neue',sans-serif;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-overflow-scrolling: touch;
    /*
     *Fix: https://stackoverflow.com/questions/27966735/why-background-image-is-moving-when-scroll-at-ie 
     */
    /*Edge - works to 41.16299.402.0*/
    @supports (-ms-ime-align:auto) {
      overflow: auto;
      height: 100%;
      position: relative;
    }
    /*Ie 10/11*/
    @media screen and (-ms-high-contrast: active),
     (-ms-high-contrast: none) {
      overflow: auto;
      height: 100%;
    }
  }
  html {
    /*
     *Fix: https://stackoverflow.com/questions/27966735/why-background-image-is-moving-when-scroll-at-ie 
     */
    /*Edge - works to 41.16299.402.0*/
    @supports (-ms-ime-align:auto) {
      overflow: hidden;
      height: 100%;
    }
    /*Ie 10/11*/
    @media screen and (-ms-high-contrast: active),
     (-ms-high-contrast: none) {
      overflow: hidden;
      height: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #000;
    transition: all .2s ease-in-out;
    border-bottom: .1rem solid transparent;
    :hover {
      border-bottom-color: rgba( 0, 0, 0, .35 );
    }
  }
  h1, h2, h3 {
    font-family: 'Georgia',serif;
  }
`

export default GlobalStyle;
