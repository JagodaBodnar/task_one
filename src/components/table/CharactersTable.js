import React from "react";
import TableHeader from "../common/table/header/Header";
import TableRow from "../common/table/row/Row";
import Table from "../common/table/Table";
import TableContent from "./TableContent";
import { StyledChevronUp, StyledChevronDown } from "./CharacterTableStyles";
import Checkbox from "../inputs/Checkbox";

const CharactersTable = ({ characters, checked, handleCheckboxChange }) => {
  const headers = [
    "Name",
    "Born",
    "Homeworld",
    "Vehicles and Starships",
    "Status",
  ];
  return (
    <Table>
      <TableRow>
        <TableHeader>
          {/* <Checkbox onChange={() => checkedChange(!checked)} /> */}
          <input
            type="checkbox"
            defaultChecked={checked}
            onClick={() => handleCheckboxChange()}
          />
        </TableHeader>
        {headers.map((header) => (
          <>
            <TableHeader>
              {header}
              <StyledChevronUp />
              <StyledChevronDown />
            </TableHeader>
          </>
        ))}
        <TableHeader>Actions</TableHeader>
      </TableRow>
      {characters.map((data) => {
        return <TableContent key={data.name} data={data} />;
      })}
    </Table>
  );
};
export default CharactersTable;
