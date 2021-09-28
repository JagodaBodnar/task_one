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
  const [people, setPeople] = useState([]);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // async function fetchingHomeworld(url) {
  //   const checkStatus = (res) =>
  //     res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
  //   const parseJSON = (response) => response.json();

  //   const getPage = (url) =>
  //     fetch(url)
  //       .then(checkStatus)
  //       .then(parseJSON)
  //       .catch((error) => console.log("There was a problem!", error));

  //   const results = await getPage(url).then((result) => result.name);
  //   return results;
  // }

  // function getHomeworld(url) {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       data.results.map((charactersData) => {
  //         fetch(`${charactersData.homeworld}`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             return data;
  //           })
  //           .then((response) => {
  //             setPeople((prev) => [
  //               ...prev,
  //               {
  //                 name: charactersData.name,
  //                 species: charactersData.species,
  //                 born: charactersData.birth_year,
  //                 homeworld: response.name,
  //                 active: true,
  //               },
  //             ]);
  //           });
  //       });
  //     });
  // }
  // useEffect(() => fetchCharacters(), []);

  // useEffect(() => {
  //   const cleanUp = setTimeout(() => fetchSearchCharacters(), 500);
  //   return () => {
  //     clearTimeout(cleanUp);
  //   };
  // }, [search]);
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

  const getData = async (urls) => {
    const checkStatus = (res) =>
      res.ok ? Promise.resolve(res) : Promise.reject("Unspecified");

    const parseJSON = (response) => response.json();

    // const getHomeworld = (charactersData, item) => {
    //   fetch(`${charactersData}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       return data;
    //     })
    //     .then((response) => {
    //       console.log({
    //         name: item.name,
    //         species: item.species,
    //         born: item.birth_year,
    //         homeworld: response.name,
    //         active: true,
    //       });
    //     });
    // };
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

    const [peoples] = await Promise.all(urls.map((url) => getAllPages(url)));
    const homeworldUrl = peoples.map((item) => {
      getPage(`${item.homeworld}`).then((response) => {
        setPeople((prevState) => [
          ...prevState,
          {
            name: item.name,
            born: item.birth_year,
            homeworld: response.name,
            status: true,
          },
        ]);
      });
    });
    const awainingHomeworld = await homeworldUrl;
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
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts, people);
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
          totalPosts={people.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
