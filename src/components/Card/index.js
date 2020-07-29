import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ListMovies } from "./styles";
import Loader from "../Loader";
import api from "../../services/api";

function Card() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getMovies() {
      const response = await api.get("/films");
      setMovies(response.data.results);
      setLoading(false);
    }

    getMovies();
  }, []);

  const getCharacters = async (movie) => {
    const response = movie.characters.map(async (char) => await api.get(char));

    return Promise.all(response).then((arrayCharacter) => {
      return arrayCharacter.map((char) => {
        return char.data.name;
      });
    });
  };

  const moreDetails = async (e, movie) => {
    e.preventDefault();
    setLoading(true);

    const arrayChar = await getCharacters(movie);

    const obj = {
      movie: { ...movie, arrayChar },
    };

    setLoading(false);
    history.push("/details", obj);
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
