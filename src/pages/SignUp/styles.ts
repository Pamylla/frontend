import styled from "styled-components";

const signUpBackground = require("../../assets/background-sign-up.jpg");

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
          margin-bottom: 24px;
        }

        a {
          color: #f4ede8;
          margin-top: 24px;
          transition: color 0.2s;
        }

  }

  > a {
        color: #f4ede8;
        display: flex;
        align-items: center;
        transition: color 0.2s;

        &:hover {
          color:"#ff9000";
        }

        svg {
          margin-right: 8px;
        }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
