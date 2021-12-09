import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Container = styled.div`
  padding: 1.9375rem 1.5rem;
  margin: 0 auto;

  //for tablets
  @media (max-width: 900px) {
    max-width: 621px;
  }

  //for desktops
  @media ${breakpoints.desktop} {
    max-width: 780px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.25rem;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.logoColor};
  font-size: 1.625rem;
`;

export const ThemeSelector = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    path {
      fill: ${(props) => props.theme.hoverColor};
    }

    button {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

export const ThemeButton = styled.button`
  color: ${(props) => props.theme.btnColor};
  background: transparent;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 0.8125rem;
`;

export const Icon = styled.svg`
  margin-left: 1rem;
`;
