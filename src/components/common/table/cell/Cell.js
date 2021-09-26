import React from "react";
import { StyledCell } from "./CellStyle.js";

const TableCell = (props) => {
  return <StyledCell>{props.children}</StyledCell>;
};
export default TableCell;
