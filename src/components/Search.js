import React from "react";
import { InputSection, Input, Button } from "./SearchStyles";

const Search = ({ setUser, fetchData, error }) => {
  return (
    <div>
      <InputSection>
        <Input
          type="text"
          placeholder="Search GitHub username..."
          onChange={(e) => setUser(e.target.value)}
        />

        <Button error={error} onClick={() => fetchData()}>
          Search
        </Button>
      </InputSection>
    </div>
  );
};

export default Search;
