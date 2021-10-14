import { ApiService } from "../services/api/api.service";

export const getPeople = async () => {
  const results = [];

  let link;
  while (true) {
    const response = await ApiService.getPeopleData(link);
    results.push(...response.results);

    if (!response.next) {
      break;
    }
    link = response.next;
  }

  return await Promise.all(
    results.map(
      async ({
        name,
        birth_year,
        homeworld: homeworldLink,
        species: speciesLinks,
        vehicles: vehiclesLinks,
        starships: starshipsLinks,
      }) => {
        const homeworld = (await ApiService.getData(homeworldLink)).name;
        const species = await getValuesFromDeepKey(speciesLinks);
        const vehicles = await getValuesFromDeepKey(vehiclesLinks);
        const starships = await getValuesFromDeepKey(starshipsLinks);

        return {
          name,
          birth_year,
          homeworld,
          species,
          vehicles,
          starships,
        };
      }
    )
  );
};

export const getValuesFromDeepKey = async (links) => {
  const data = await Promise.all(
    links.map(async (link) => await ApiService.getData(link))
  );
  return data.map(({ name }) => name);
};
