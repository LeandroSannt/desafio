import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 100%; //16px
    }

    @media (max-width: 720px) {
      font-size: 75%; //12px
    }
  }

  body {

    font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  background-color: #202124;
  }

  body,
  input,
  textarea,
  *::placeholder{
        font-size: 12px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  strong {
    font-weight: 700;
    color: white;

  }

  button {
    cursor: pointer;
    border: 0px;
    background: none;
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }




`
