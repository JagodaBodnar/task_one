import React from "react";
import {
  StyledButtonIcon,
  StyledTableNavWrapper,
} from "./TableNavigationStyles";
import Button from "../button/Button";
import SearchInput from "../inputs/SearchInput";
const TableNavigation = ({ search, onSearch }) => {
  return (
    <StyledTableNavWrapper>
      <SearchInput search={search} onSearch={onSearch} />
      <Button deactivate>
        <StyledButtonIcon />
        Deactivate characters
      </Button>
      <Button remove>
        <StyledButtonIcon />
        Remove characters
      </Button>
    </StyledTableNavWrapper>
  );
};
export default TableNavigation;
