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
    --buttonHover: #60abff;

    //box shadow for light theme
    --cardShadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.1986);
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
    transition: all 0.4s linear;
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

  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
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
