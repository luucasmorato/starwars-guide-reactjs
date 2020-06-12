import React, { useState } from "react";

import { Container, SectionTitle } from "./styles";

const Details = ({ location }) => {
  const [movie] = useState(location.state[0]);

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
        </section>
        <section>
          <SectionTitle>Planets</SectionTitle>
        </section>
        <section>
          <SectionTitle>Species</SectionTitle>
        </section>
        <section>
          <SectionTitle>Starships</SectionTitle>
        </section>
        <section>
          <SectionTitle>Vehicles</SectionTitle>
        </section>
      </div>
    </Container>
  );
};

export default Details;
