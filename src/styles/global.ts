import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #fff
  }

  body, input, button {
    font-family: 'Roboto-Slab', serif;
    font-size: 16px;
    font-weight: 500
  }

  button: {
    cursor: pointer
  }
`;
