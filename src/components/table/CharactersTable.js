import React, { useState, useEffect } from "react";
import TableCell from "../common/table/cell/Cell";
import TableHeader from "../common/table/header/Header";
import TableRow from "../common/table/row/Row";
import Table from "../common/table/Table";
import TableContent from "./TableContent";

import {
  StyledChevronUp,
  StyledChevronDown,
  StyledProfile,
} from "./CharacterTableStyles";
import Checkbox from "../inputs/Checkbox";

const CharactersTable = ({ characters }) => {
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
          <Checkbox />
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
      {characters.map((data) => (
        <TableContent key={data.name} data={data} />
      ))}
    </Table>
  );
};
export default CharactersTable;
