import axios from "axios";
import React, { useState, useEffect } from "react";
import TableCell from "../common/table/cell/Cell";
import TableRow from "../common/table/row/Row";
import Checkbox from "../inputs/Checkbox";

const TableContent = ({ data }) => {
  const [type, setType] = useState(["Unspecified"]);
  const [homeworld, setHomeworld] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  //   useEffect(() => {
  //     let vehiclesArray = [];
  //     let starshipsArray = [];
  //     axios
  //       .get(`${data.species}`)
  //       .then((response) => setType(response.data.name));
  //     axios
  //       .get(`${data.homeworld}`)
  //       .then((response) => setHomeworld(response.data.name));
  // axios
  //   .get(`${data.vehicles}`)
  //   .then((response) => setVehicles(response.data.name));

  // let urls = [];
  // data.vehicles.map((vehicle) => urls.push(`${vehicle}`));
  // data.starships.map((starships) => urls.push(`${starships}`));
  // Promise.all(urls.map((u) => fetch(u))).then((responses) =>
  //   Promise.all(responses.map((res) => res.json())).then((texts) =>
  //     console.log(texts)
  //   )
  // );
  // const fetchVehicles = data.vehicles.map((vehicle) =>
  //   fetch(`${vehicle}`).then((res) =>
  //     res.json().then((response) => response.name)
  //   )
  // );
  // const fetchStarships = data.starships.map((starships) =>
  //   fetch(`${starships}`).then((res) =>
  //     res.json().then((response) => {
  //       console.log(response.name);
  //     })
  //   )
  // );
  // const allPromise = Promise.all([fetchVehicles, fetchStarships]);
  // allPromise.then((values) => setTimeout(() => console.log(values), 2000));

  // Promise.all(fetchVehicles).then((promisesArray) =>
  //   setVehicles(vehiclesArray)
  // );
  // Promise.all(fetchStarships).then((promisesArray) =>
  //   setStarships(starshipsArray)
  // );
  //   }, []);

  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>
          <span>{data.name}</span>
          <span>{type === undefined ? "Unspesified" : type}</span>
        </TableCell>
        <TableCell>{data.birth_year}</TableCell>
        <TableCell>{homeworld}</TableCell>
        <TableCell>{vehicles}</TableCell>
        <TableCell>Active</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </>
  );
};
export default TableContent;
