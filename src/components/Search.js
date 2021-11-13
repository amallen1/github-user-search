import React from "react";
import styled from "styled-components";

const InputSection = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.125rem 6rem 1.0625rem 2.815rem;
  border: none;
  border-radius: 15px;
  box-shadow: var(--cardShadow);
  font-size: 0.8125rem;
  line-height: 1.5625rem;
  background-image: url("/assets/icon-search.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 1rem;
  background-color: ${(props) => props.theme.cardColor};

  ::placeholder {
    /* color: #4b6a9b; */

    color: ${(props) => props.theme.textColor};
  }

  :focus {
    outline: none;
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
`;

const Search = () => {
  return (
    <div>
      <InputSection>
        <Input type="text" placeholder="Search GitHub username..." />
        <Button>Search</Button>
      </InputSection>
    </div>
  );
};

export default Search;
