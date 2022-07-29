import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-light: #DFEFD9;
    --color-primary-dark: #78a468;
    --color-primary-50: #93D7AF;
    --color-primary-transparent: rgba(100,180,71, 0.2);
    --color-text: #3D3D3D;
    --color-text-in-primary: #FFFFFF;
    --color-text-complement: #A3A3A2;
    --color-text-light: #C9C9C9;
    --color-red: #B4423E; 
    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #E0E0E0;
    --color-gray-0: #F5F5F5;
    --color-tertiary: #EDB12A;
    --color-secondary: #EB5757;
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-error: #E60000;
    --color-information: #155BCB;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4 {
    font-weight: bold;
  }
 h5, h6, strong {
    font-weight: 500;
  }
  p {
    color: var(--color-gray-50);
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
