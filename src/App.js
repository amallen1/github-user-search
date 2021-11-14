import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Search from "./components/Search";
import ProfileCard from "./components/ProfileCard";


const lightTheme = {
  backgroundColor: "var(--lightGray)",
  btnColor: "var(--dullBlue)",
  logoColor: "#222731",
  hoverColor: "var(--nearBlack)",
  imageUrl: "/assets/icon-moon.svg",
  color: "black",
  textColor: "var(--dullBlue)",
  cardColor: "var(--white)",
  usernameColor: "#2B3442",
  shadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.1986);"
};

const darkTheme = {
  backgroundColor: "var(--darkBlack)",
  btnColor: "var(--white)",
  logoColor: "var(--white)",
  hoverColor: "#90A4D4",
  imageUrl: "/assets/icon-sun.svg",
  color: "var(--white)",
  textColor: "var(--white)",
  cardColor: "var(--navyBlue)",
  usernameColor: "var(--white)",
  shadow: "none",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const Container = styled.div`
  padding: 1.9375rem 1.5rem;
  margin: 0 auto;
  /* border: 1px solid red; */

  //for tablets
  @media (max-width: 900px) {
    max-width: 621px;
  }

  //for desktops
  @media (min-width: 900px)  {
    max-width: 780px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.25rem;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.logoColor};
  font-size: 1.625rem;
`;

const ThemeSelector = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeButton = styled.button`
  color: ${(props) => props.theme.btnColor};
  background: transparent;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 0.8125rem;

  :hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

const Icon = styled.img`
  margin-left: 1rem;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />

      <Container>
        <Header>
          <Logo>devfinder</Logo>
          <ThemeSelector>
            <ThemeButton onClick={themeToggler}>
              {theme === "light" ? "dark" : "light"}
            </ThemeButton>
            {theme === "light" ? (
              <Icon src="./assets/icon-moon.svg" />
            ) : (
              <Icon src="./assets/icon-sun.svg" />
            )}
          </ThemeSelector>
        </Header>

        <Search />
        <ProfileCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
