import React from "react";
import TableHeader from "../common/table/header/Header";
import TableRow from "../common/table/row/Row";
import Table from "../common/table/Table";
import TableContent from "./TableContent";
import { StyledChevronUp, StyledChevronDown } from "./CharacterTableStyles";
import Checkbox from "../inputs/Checkbox";
import Spinner from "../spinner/Spinner";

const CharactersTable = ({ characters, checked, handleCheckboxChange }) => {
  console.log(characters);
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
        {headers.map((header, index) => (
          <TableHeader key={index}>
            {header}
            <StyledChevronUp />
            <StyledChevronDown />
          </TableHeader>
        ))}
        <TableHeader>Actions</TableHeader>
      </TableRow>
      {characters.length === 0 ? (
        <Spinner />
      ) : (
        characters.map((data, index) => {
          return <TableContent key={index} data={data} />;
        })
      )}
    </Table>
  );
};
export default CharactersTable;
