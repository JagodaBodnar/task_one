import React from "react";
import TableHeader from "../common/table/header/Header";
import TableRow from "../common/table/row/Row";
import Table from "../common/table/Table";
import TableContent from "./TableContent";
import Checkbox from "../inputs/Checkbox";
import Spinner from "../spinner/Spinner";

const CharactersTable = ({characters, filter}) => {
    return (
        <Table>
            <TableRow>
                <TableHeader sort>
                    <Checkbox/>
                </TableHeader>
                <TableHeader name="name" filter={filter}>
                    Name
                </TableHeader>
                <TableHeader name="birth_year" filter={filter}>
                    Born
                </TableHeader>
                <TableHeader name="homeworld" filter={filter}>
                    Homeworld
                </TableHeader>
                <TableHeader name="vehicles" filter={filter}>
                    Vehicles and Starships
                </TableHeader>
                <TableHeader name="status" filter={filter}>
                    Status
                </TableHeader>
                <TableHeader sort disabled>Actions</TableHeader>
            </TableRow>
            {characters.length === 0 ? (
                <Spinner/>
            ) : (
                characters.map((data, index) => {
                    return <TableContent key={index} data={data}/>;
                })
            )}
        </Table>
    );
};
export default CharactersTable;
