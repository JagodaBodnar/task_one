import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles.js";
import { globalStyles } from "./assets/styles/globalStyles";
import MainHeader from "./components/main_header/MainHeader";
import Pagination from "./components/pagination/Pagination.js";
import CharactersTable from "./components/table/CharactersTable.js";
import TableNavigation from "./components/table-nav/TableNavigation.js";
import { getPeople } from "./helpers/data.helpers.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const characters = await getPeople();
    setCharacters(characters);
  };

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <ThemeProvider theme={globalStyles}>
      <StyledApp>
        <MainHeader>Characters</MainHeader>
        <TableNavigation search={search} onSearch={onSearch} />
        <CharactersTable characters={currentPosts}></CharactersTable>
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={characters.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
