import styled from "styled-components";

export const Container = styled.section`
  margin: 20px 0;

  header {
    font-weight: bold;
  }

  .details-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 18px;
    list-style-type: circle;

    li {
      width: 20%;
    }
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;
