import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Search from "./components/Search";

const lightTheme = {
  backgroundColor: "var(--lightGray)",
  btnColor: "var(--dullBlue)",
  logoColor: "#222731",
  hoverColor: "var(--nearBlack)",
  imageUrl: "/assets/icon-moon.svg",
  color: "black",
};

const darkTheme = {
  backgroundColor: "var(--darkBlack)",
  btnColor: "var(--white)",
  logoColor: "var(--white)",
  hoverColor: "#90A4D4",
  imageUrl: "/assets/icon-sun.svg",
  color: "white",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const Container = styled.div`
  padding: 1.9375rem 1.5rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.25rem;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.logoColor};
  font-size: 1.444rem;
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

      <div>
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
          {/* Search */}
          {/* Profile */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
