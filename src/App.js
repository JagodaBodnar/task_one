import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles.js";
import { globalStyles } from "./assets/styles/globalStyles";
import MainHeader from "./components/main_header/MainHeader";
import Pagination from "./components/pagination/Pagination.js";
import SearchInput from "./components/inputs/SearchInput.js";
import CharactersTable from "./components/table/CharactersTable.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  const getData = async (urls) => {
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

    const [people] = await Promise.all(urls.map((url) => getAllPages(url)));
    setCharacters(people);
  };

  const getStarWarsCharacters = () => {
    const urls = [`https://swapi.dev/api/people/`];
    getData(urls);
  };
  const getSearchedCharacter = () => {
    const urls = [`https://swapi.dev/api/people/?search=${search}`];
    getData(urls);
    setTimeout(() => setCurrentPage(1), 1000);
  };

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => getStarWarsCharacters(), []);
  useEffect(() => {
    const cleanUp = setTimeout(() => getSearchedCharacter(), 500);
    return () => {
      clearTimeout(cleanUp);
    };
  }, [search]);
  return (
    <ThemeProvider theme={globalStyles}>
      <StyledApp>
        <MainHeader>Characters</MainHeader>
        <SearchInput search={search} onSearch={onSearch} />
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
