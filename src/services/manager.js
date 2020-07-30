import api from "./api";

export const getMovies = async () => {
  const response = await api.get("/films");
  return response.data.results;
};

export const getCharacters = async (movie) => {
  const response = movie.characters.map(async (char) => await api.get(char));

  return Promise.all(response).then((arrayCharacter) => {
    return arrayCharacter.map((char) => {
      return char.data.name;
    });
  });
};

export const getPlanets = async (movie) => {
  const response = movie.planets.map(async (planet) => await api.get(planet));

  return Promise.all(response).then((arrayPlanets) => {
    return arrayPlanets.map((planet) => {
      return planet.data.name;
    });
  });
};

export const getSpecies = async (movie) => {
  const response = movie.species.map(async (specie) => await api.get(specie));

  return Promise.all(response).then((arraySpecies) => {
    return arraySpecies.map((specie) => {
      return specie.data.name;
    });
  });
};

export const getStarships = async (movie) => {
  const response = movie.starships.map(
    async (starship) => await api.get(starship)
  );

  return Promise.all(response).then((arrayStarships) => {
    return arrayStarships.map((starship) => {
      return starship.data.name;
    });
  });
};

export const getVehicles = async (movie) => {
  const response = movie.vehicles.map(
    async (vehicle) => await api.get(vehicle)
  );

  return Promise.all(response).then((arrayVehicles) => {
    return arrayVehicles.map((vehicle) => {
      return vehicle.data.name;
    });
  });
};
