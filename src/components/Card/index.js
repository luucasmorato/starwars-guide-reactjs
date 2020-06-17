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

  const moreDetails = (e, movie) => {
    e.preventDefault();

    history.push("/details", [movie]);
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
