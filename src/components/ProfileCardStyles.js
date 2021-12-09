import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const Card = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 2rem 1.5rem;
  font-size: 0.8125rem;
  @media ${breakpoints.tablet} {
    padding: 2.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 2.0625rem;
  position: relative;

  @media ${breakpoints.desktop} {
    margin-bottom: 0rem;
  }
`;

export const AvatarContainer = styled.div`
  margin-right: 1.1875rem;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }

  @media ${breakpoints.tablet} {
    img {
      height: 117px;
      width: 117px;
    }
  }
`;

export const MainInfo = styled.div`
  @media ${breakpoints.tablet} {
    p {
      font-size: 0.9375rem;
    }
    margin-top: 0.75rem;
  }
  @media ${breakpoints.desktop} {
    /* display: flex;
    justify-content: space-between; */
    /* margin-right: auto; */
    display: flex;
    p {
      /* margin-left: 6rem; */
      position: absolute;
      right: 0px;
      top: 1.25rem;
    }
  }
`;

export const NameSection = styled.div`
  h1 {
    font-size: 1rem;
    line-height: normal;
    color: ${(props) => props.theme.usernameColor};
  }
  h3 {
    /* display: inline-block; */
    color: var(--brightBlue);
    margin-bottom: 0.375rem;
    font-size: 0.8125rem;
    @media ${breakpoints.tablet} {
      margin-bottom: 4px;
    }
  }
  @media ${breakpoints.tablet} {
    h1 {
      font-size: revert;
      margin-bottom: 0.125rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Bio = styled.div`
  margin-bottom: 1.4375rem;

  @media ${breakpoints.tablet} {
    font-size: 0.9375rem;
  }

  @media ${breakpoints.desktop} {
    margin-left: 8.7rem;
    margin-top: -2rem;
  }
`;

export const Stats = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1.125rem 0.875rem 1.1875rem;
  margin-bottom: 1rem;
  ul {
    display: flex;
    text-align: center;
    li {
      width: 100%;
    }
  }
  p {
    font-size: 0.6875rem;
    margin-bottom: 0.5rem;
  }
  span {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.usernameColor};
  }
  @media ${breakpoints.tablet} {
    ul {
      text-align: left;
    }
    padding: 0.9375rem 0.875rem 1.0625rem;
    margin-bottom: 1.875rem;

    p {
      font-size: 0.8125rem;
      margin-bottom: 1px;
    }
    span {
      font-size: 1.375rem;
    }

    @media ${breakpoints.desktop} {
      margin-left: 8.7rem;
    }
  }

  @media ${breakpoints.desktop} {
    padding-left: 2rem;
  }
`;

export const Links = styled.div`
  ul {
    display: grid;

    li {
      display: flex;
      margin-bottom: 1rem;
      position: relative;
    }

    p,
    a {
      position: absolute;
      left: 2.0625rem;
    }

    a {
      color: ${(props) => props.theme.textColor};
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media ${breakpoints.tablet} {
    ul {
      grid-template-columns: 1fr 1fr;
    }

    li {
      :nth-child(2) {
        order: 2;
      }

      :nth-child(4) {
        order: 2;
      }
    }
  }

  @media ${breakpoints.desktop} {
    margin-left: 8.7rem;
  }
`;

export const NoBio = styled.p`
  color: ${(props) => props.theme.textColor};
  opacity: 0.75;
`;

export const Unavailable = styled.p`
  color: #4b6a9b;
  opacity: 0.75;
  position: absolute;
  left: 2.0625rem;
`;

export const Icon = styled.svg``;
