import styled, { createGlobalStyle } from "styled-components";

/** GLOBAL STYLE */
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

/** WRAPPER CONTAINER STYLE */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: green;
`;
