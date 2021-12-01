import styled from "styled-components";

export const Container = styled.div`
  padding: 1.9375rem 1.5rem;
  margin: 0 auto;
  /* border: 1px solid red; */

  //for tablets
  @media (max-width: 900px) {
    max-width: 621px;
  }

  //for desktops
  @media (min-width: 900px) {
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
`;

export const ThemeButton = styled.button`
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

export const Icon = styled.img`
  margin-left: 1rem;
`;
