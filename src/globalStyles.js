import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    font-size: 16px;

    //light mode colors
    --brightBlue: #0079ff;
    --gray: #697c9a;
    --dullBlue: #4b6a9b;
    --darkGray: #2b3442;
    --lightGray: #f6f8ff;
    --offWhite: #fefefe;

    //dark mode colors
    //--brightBlue
    --white: #ffffff;
    --darkBlack: #141d2f;
    --navyBlue: #1e2a47;
    --nearBlack: #222731;

    //button hover color
    --buttonHover: #60ABFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body {
    min-height: 100vh;
    font-family: "Space Mono", sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    transition: all 0.40s linear;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 1.625rem;
    line-height: 2.375rem;
  }

  h2 {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }

  h3,
  h4 {
    font-weight: 400;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  h4 {
    font-size: 0.8125rem;
    line-height: 1.25rem;
  }
`;
