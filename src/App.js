import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles.js";
import axios from "axios";
import { globalStyles } from "./assets/styles/globalStyles";
import MainHeader from "./components/main_header/MainHeader";
import Pagination from "./components/pagination/Pagination.js";
import SearchInput from "./components/inputs/SearchInput.js";
import CharactersTable from "./components/table/CharactersTable.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  async function fetchingHomeworld(url) {
    const checkStatus = (res) =>
      res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
    const parseJSON = (response) => response.json();

    const getPage = (url) =>
      fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => console.log("There was a problem!", error));

    const results = await getPage(url).then((result) => result.name);
    return results;
  }

  async function fetchCharacters() {
    const response = await fetch(`https://swapi.dev/api/people/`);
    const data = await response.json();

    const transformedCharacters = await data.results.map((charactersData) => {
      return {
        name: charactersData.name,
        species: charactersData.species,
        born: charactersData.birth_year,
        homeworld: charactersData.homeworld,
        vehicles: charactersData.vehicles,
        status: true,
        checked: checked,
      };
    });
    console.log(transformedCharacters);
    setCharacters(transformedCharacters);
  }
  useEffect(() => fetchCharacters(), []);
  // const getData = async () => {
  //   const data = await axios({
  //     method: "get",
  //     url: "https://swapi.dev/api/people/",
  //     responseType: "json",
  //   });
  //   const firstResponse = await data;
  //   const promises = firstResponse.data.results.map((item) => {
  //     return item.homeworld;
  //     // fetch(`${item.homeworld}`)
  //     //   .then((res) => res.json())
  //     //   .then((values) => (item.homeworld = values.name));
  //   });

  //   const second = await Promise.all(
  //     promises.map((item) => {
  //       axios.get(`${item}`).then((response) => {
  //         console.log(response.data.name);
  //       });
  //     })
  //   );
  //   const thirdResponse = await second;
  //   console.log(second, thirdResponse);

  //   return setCharacters(thirdResponse);
  // };

  // const getData = async (urls) => {
  //   const checkStatus = (res) =>
  //     res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
  //   const parseJSON = (response) => response.json();

  //   const getPage = (url) =>
  //     fetch(url)
  //       .then(checkStatus)
  //       .then(parseJSON)
  //       .catch((error) => console.log("There was a problem!", error));

  //   const getAllPages = async (url, collection = []) => {
  //     const { results, next } = await getPage(url);
  //     collection = [...collection, ...results];
  //     if (next !== null) {
  //       return getAllPages(next, collection);
  //     }
  //     console.log(collection);
  //     collection.forEach((item) =>
  //       item.species.length === 0
  //         ? (item.species = "Unspecified")
  //         : getPage(`${item.species}`).then(
  //             (response) => (item.species = response.name)
  //           )
  //     );
  //     return collection;
  //   };

  //   const [people] = await Promise.all(urls.map((url) => getAllPages(url)));

  //   setCharacters(people);
  // };

  // const getStarWarsCharacters = () => {
  //   const urls = [`https://swapi.dev/api/people/`];
  //   getData(urls);
  // };
  // const getSearchedCharacter = () => {
  //   const urls = [`https://swapi.dev/api/people/?search=${search}`];
  //   getData(urls);
  //   setTimeout(() => setCurrentPage(1), 1000);
  // };

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // useEffect(() => getStarWarsCharacters(), []);
  // useEffect(() => {
  //   const cleanUp = setTimeout(() => getSearchedCharacter(), 500);
  //   return () => {
  //     clearTimeout(cleanUp);
  //   };
  // }, [search]);
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  if (characters.length === 0) {
    return "loading";
  }
  const checkedChange = (check) => {
    setChecked(check);
  };
  return (
    <ThemeProvider theme={globalStyles}>
      <StyledApp>
        <MainHeader>Characters</MainHeader>
        <SearchInput search={search} onSearch={onSearch} />
        <CharactersTable
          characters={characters}
          checked={checked}
          checkedChange={checkedChange}
        ></CharactersTable>
        {/* <Pagination
          postsPerPage={postPerPage}
          totalPosts={characters.length}
          paginate={paginate}
          currentPage={currentPage}
        /> */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
