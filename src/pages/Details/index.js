import React, { useState } from "react";
import { Container } from "./styles";
import DetailsList from "../../components/DetailsList";

const Details = ({ location }) => {
  const [movie] = useState(location.state.movie);

  return (
    <Container>
      <header>
        <h1>{movie.title}</h1>
        <h2>Director: {movie.director}</h2>
        <h2>Episode: {movie.episode_id}</h2>
      </header>

      <div>
        <p className="description">{movie.opening_crawl}</p>
        <DetailsList movie={movie.characters} title="Characters" />
        <DetailsList movie={movie.planets} title="Planets" />
        <DetailsList movie={movie.species} title="Species" />
        <DetailsList movie={movie.starships} title="Starships" />
        <DetailsList movie={movie.vehicles} title="Vehicles" />
      </div>
    </Container>
  );
};

export default Details;
