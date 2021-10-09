import React from "react";
// import { defaultSort } from "../../../../utils.js/sorting.js";
import FilterIcons from "./FilterIcons.js";
import { StyledHeader } from "./HeaderStyle.js";

const TableHeader = ({ children, sort, name, filter }) => {
  // const [direction, setDirection] = useState(
  //   JSON.parse(JSON.stringify(defaultSort))
  // );
  // const [sortOn, setSortOn] = useState();
  // const sorting = () => {
  //   setSortOn(name);
  //   const filteredDirection = direction.filter((item) => {
  //     return item.name !== name;
  //   });
  //   const sortDirection = direction.filter((item) => {
  //     return item.name === name;
  //   });
  //   sortDirection.forEach((item) =>
  //     item.direction === "ascending"
  //       ? (item.direction = "descending")
  //       : (item.direction = "ascending")
  //   );
  //   console.log(sortDirection, filteredDirection, direction);
  //   setDirection([...filteredDirection, ...sortDirection]);
  // };

  return (
    <StyledHeader onClick={() => filter(name)}>
      {children}
      {!sort && <FilterIcons name={name} />}
    </StyledHeader>
  );
};
export default TableHeader;
