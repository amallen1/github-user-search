import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Search from "./components/Search";
import ProfileCard from "./components/ProfileCard";
import axios from "axios";
import {
  Container,
  Header,
  Logo,
  ThemeSelector,
  ThemeButton,
  Icon,
} from "./AppStyles";

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
  shadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.1986);",
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

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("octocat");
  const [data, setData] = useState(null);
  const [caughtError, setCaughtError] = useState(false);
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    axios(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setCaughtError(false);
        setIsLoaded(true);
        return response.data;
      })
      .catch((error) => {
        console.log(error);

        //If username doesn't exist
        setCaughtError(true);
      });
  };

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

        <Search
          setUser={setUsername}
          user={username}
          fetchData={fetchData}
          error={caughtError}
        />
        <ProfileCard data={data} loaded={loaded} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
