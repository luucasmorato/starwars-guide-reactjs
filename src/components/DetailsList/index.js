import React from "react";
import { Container, SectionTitle } from "./styles";

function DetailsList({ movie, title }) {
  return (
    <Container>
      <SectionTitle> {title} </SectionTitle>
      <ul className="details-list">
        {movie.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </Container>
  );
}

export default DetailsList;
