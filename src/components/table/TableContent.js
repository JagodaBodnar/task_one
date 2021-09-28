import React from "react";
import TableCell from "../common/table/cell/Cell";
import TableRow from "../common/table/row/Row";
import Checkbox from "../inputs/Checkbox";
import {
  StyledProfile,
  StyledDeactive,
  StyledActive,
  StyledBoldText,
  StyledWrapper,
  StyledEdit,
  StyledActions,
} from "./CharacterTableStyles";

const TableContent = ({ data }) => {
  return (
    <>
      <TableRow>
        <TableCell>
          {/* <Checkbox
            checked={data.checked}
          /> */}
          <input type="checkbox" />
        </TableCell>
        <TableCell>
          <StyledProfile>
            <StyledBoldText>{data.name}</StyledBoldText>
            <span>{data.species}</span>
          </StyledProfile>
        </TableCell>
        <TableCell>{data.birth_year}</TableCell>
        <TableCell>{data.homeworld}</TableCell>
        <TableCell>{data.vehicles}</TableCell>
        <TableCell>
          {data.status ? (
            <StyledWrapper>
              <StyledActive /> <StyledBoldText>Active</StyledBoldText>
            </StyledWrapper>
          ) : (
            <StyledWrapper>
              <StyledDeactive /> <StyledBoldText>Deactivated</StyledBoldText>
            </StyledWrapper>
          )}
        </TableCell>
        <TableCell>
          <StyledEdit />
          <StyledActions />
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableContent;
