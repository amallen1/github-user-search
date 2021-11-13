import React from "react";
import styled from "styled-components";

const InputSection = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.125rem 6.5rem 1.0625rem 2.815rem;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.1986);
  font-size: 0.8125rem;
  line-height: 1.5625rem;
  background-image: url("/assets/icon-search.svg");
  background-repeat: no-repeat;
  background-position: 1rem;
  position: relative;

  ::placeholder {
    /* padding-left: 1.5625rem; */
  }
`;

const Button = styled.button`
  position: absolute;
  right: 7px;
  top: 9px;

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
