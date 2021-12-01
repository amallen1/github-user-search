import React from "react";
import styled from "styled-components";

import breakpoint from "../breakpoints";

const InputSection = styled.div`
  position: relative;
  margin-bottom: 1rem;

  @media (min-width: 500px) {
    margin-bottom: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.125rem 6rem 1.0625rem 2.815rem;
  border: none;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadow};
  line-height: 1.5625rem;
  background-image: url("/assets/icon-search.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 1rem;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.textColor};
  font-size: 0.8125rem;

  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }

  :focus {
    outline: none;
  }

  @media (min-width: 500px) {
    font-size: 1.125rem;
    padding: 1.375rem 6rem 1.375rem 4rem;
    background-size: 24px 24px;
    background-position: 2rem;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 7px;
  top: 6px;
  bottom: 7px;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  background-color: var(--brightBlue);
  color: white;
  font-size: 0.875rem;
  font-weight: 700;

  :hover {
    background-color: var(--buttonHover);
  }

  @media (min-width: 500px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const Search = ({ setUser, user, fetchData }) => {
  return (
    <div>
      <InputSection>
        <Input
          type="text"
          placeholder="Search GitHub username..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        {/* should call the api on click */}
        <Button onClick={fetchData}>Search</Button>
      </InputSection>
    </div>
  );
};

export default Search;
