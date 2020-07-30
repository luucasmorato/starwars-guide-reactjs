import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ListMovies } from "./styles";
import Loader from "../Loader";
import {
  getCharacters,
  getPlanets,
  getMovies,
  getSpecies,
  getStarships,
  getVehicles,
} from "../../services/manager";

function Card() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const onLoad = async () => {
      setMovies(await getMovies());
      setLoading(false);
    };
    onLoad();
  }, []);

  const moreDetails = async (e, movie) => {
    e.preventDefault();
    setLoading(true);

    const arrayCharacters = await getCharacters(movie);
    const arrayPlanets = await getPlanets(movie);
    const arraySpecies = await getSpecies(movie);
    const arrayStarships = await getStarships(movie);
    const arrayVehicles = await getVehicles(movie);

    const objMovie = {
      movie: {
        ...movie,
        characters: [...arrayCharacters],
        planets: [...arrayPlanets],
        species: [...arraySpecies],
        starships: [...arrayStarships],
        vehicles: [...arrayVehicles],
      },
    };

    setLoading(false);
    history.push("/details", objMovie);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ListMovies>
          {movies.map((movie) => (
            <li key={movie.episode_id}>
              <header>{movie.title}</header>
              <div>
                <strong> Episode: </strong>
                <span> {movie.episode_id} </span>
              </div>
              <div>
                <p>
                  <strong> Introduction: </strong>
                  {movie.opening_crawl}
                </p>
              </div>

              <div>
                <Link to="/details" onClick={(e) => moreDetails(e, movie)}>
                  More details
                </Link>
              </div>
            </li>
          ))}
        </ListMovies>
      )}
    </>
  );
}

export default Card;
