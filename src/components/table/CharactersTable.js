import React from "react";
import TableCell from "../common/table/cell/Cell";
import TableHeader from "../common/table/header/Header";
import TableRow from "../common/table/row/Row";
import Table from "../common/table/Table";

import { StyledChevronUp, StyledChevronDown } from "./CharacterTableStyles";

const CharactersTable = () => {
  const headers = [
    "Name",
    "Born",
    "Homeworld",
    "Vehicles and Starships",
    "Status",
  ];
  const data = [
    {
      name: "Luke Skywalker",
      type: "Human",
      born: "19BBY",
      homeworld: "Tatooine",
      vehicles: "Snowspeeder",
      status: "active",
      actions: "actions",
    },
    {
      name: "Luke Skywalker",
      type: "Human",
      born: "19BBY",
      homeworld: "Tatooine",
      vehicles: "Snowspeeder",
      status: "active",
      actions: "actions",
    },
    {
      name: "Luke Skywalker",
      type: "Human",
      born: "19BBY",
      homeworld: "Tatooine",
      vehicles: "Snowspeeder",
      status: "active",
      actions: "actions",
    },
  ];
  return (
    <Table>
      <TableRow>
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
      {data.map((data) => (
        <TableRow>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.type}</TableCell>
          <TableCell>{data.homeworld}</TableCell>
          <TableCell>{data.vehicles}</TableCell>
          <TableCell>{data.status}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      ))}
    </Table>
  );
};
export default CharactersTable;
