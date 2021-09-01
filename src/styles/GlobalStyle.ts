import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --greenText: #21E270;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'FontsFreeNetSFProTextBold';
  }
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #E9E9E9;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--greenText);
    border-radius: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--greenText);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;
