import React, { useState } from "react";
import { Container, SectionTitle } from "./styles";

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
        <section>
          <SectionTitle>Description: </SectionTitle>
          <p>{movie.opening_crawl}</p>
        </section>
        <section>
          <SectionTitle>Characters</SectionTitle>
          <ul>
            {movie.characters.map((char) => (
              <li key={char}>{char}</li>
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle>Planets</SectionTitle>
          <ul>
            {movie.planets.map((planet) => (
              <li key={planet}>{planet}</li>
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle>Species</SectionTitle>
          <ul>
            {movie.species.map((specie) => (
              <li key={specie}>{specie}</li>
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle>Starships</SectionTitle>
          <ul>
            {movie.starships.map((starship) => (
              <li key={starship}>{starship}</li>
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle>Vehicles</SectionTitle>
          <ul>
            {movie.vehicles.map((vehicle) => (
              <li key={vehicle}>{vehicle}</li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
};

export default Details;
