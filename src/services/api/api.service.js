const ApiServiceDef = () => {
  const url = `https://swapi.dev/api`;

  return {
    getPeopleData: async (link) => {
      try {
        return await (await fetch(link || `${url}/people/`)).json();
      } catch (error) {
        console.log(error);
      }
    },
    searchPeople: async (search) => {
      try {
        return await (
          await fetch(`https://swapi.dev/api/people/?search=${search}`)
        ).json();
      } catch (error) {
        console.log(error);
      }
    },
    getData: async (link) => {
      try {
        return await (await fetch(link)).json();
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const ApiService = ApiServiceDef();
