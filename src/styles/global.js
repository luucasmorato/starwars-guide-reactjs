import { createGlobalStyle } from "styled-components";
import background from "../assets/images/background.svg";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: #191922 url(${background}) no-repeat center top;
    -webkit-font-smoothink: antialiased !important;
  }

  body,
  input,
  button {
    font: 14px 'Roboto', sans-serif;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
