import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles.js";
import { globalStyles } from "./assets/styles/globalStyles";
import MainHeader from "./components/main_header/MainHeader";
import Pagination from "./components/pagination/Pagination.js";
import CharactersTable from "./components/table/CharactersTable.js";
import TableNavigation from "./components/table-nav/TableNavigation.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  async function getData(url) {
    const checkStatus = (res) =>
      res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
    const parseJSON = (response) => response.json();

    const getPage = (url) =>
      fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => console.log("There was a problem!", error));

    const getAllPages = async (url, collection = []) => {
      const { results, next } = await getPage(url);
      collection = [...collection, ...results];
      if (next !== null) {
        return getAllPages(next, collection);
      }
      return collection;
    };

    const [people] = await Promise.all(url.map((url) => getAllPages(url)));
    setCharacters(people);
  }

  const getStarWarsCharacters = () => {
    const url = [`https://swapi.dev/api/people/`];
    getData(url);
  };
  const getSearchedCharacter = () => {
    const url = [`https://swapi.dev/api/people/?search=${search}`];
    getData(url);
    setTimeout(() => setCurrentPage(1), 1000);
  };

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getStarWarsCharacters();
  }, []);
  useEffect(() => {
    setCharacters([]);
    const cleanUp = setTimeout(() => getSearchedCharacter(), 500);
    return () => {
      clearTimeout(cleanUp);
    };
  }, [search]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);
  const checkedChange = (check) => {
    setChecked(check);
  };
  return (
    <ThemeProvider theme={globalStyles}>
      <StyledApp>
        <MainHeader>Characters</MainHeader>
        <TableNavigation search={search} onSearch={onSearch} />
        <CharactersTable
          characters={currentPosts}
          checked={checked}
          checkedChange={checkedChange}
        ></CharactersTable>
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
