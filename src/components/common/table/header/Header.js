import React from "react";
import { StyledHeader } from "./HeaderStyle.js";

const TableHeader = (props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};
export default TableHeader;
