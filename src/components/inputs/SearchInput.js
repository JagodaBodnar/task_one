import React from "react";

import {
  StyledSearchInput,
  StyledMagGlas,
  StyledSearchContainer,
} from "./SearchInputStyles";

const SearchInput = ({ search, onSearch }) => {
  return (
    <StyledSearchContainer>
      <StyledSearchInput
        value={search}
        onChange={onSearch}
        placeholder="Search"
      />
      {search ? search.length === 0 && null : <StyledMagGlas />}
    </StyledSearchContainer>
  );
};
export default SearchInput;
