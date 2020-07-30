import api from "./api";

export const getMovies = async () => {
  const response = await api.get("/films");
  return response.data.results;
};

export const getDetails = async (movie) => {
  const response = movie.map(async (detail) => await api.get(detail));

  return Promise.all(response).then((arrayDetails) => {
    return arrayDetails.map((detail) => {
      return detail.data.name;
    });
  });
};
