import styled from "styled-components";

export const Container = styled.div`
  min-height: 500px;
  padding: 20px;
  background: rgb(255, 255, 255, 0.3);
  border-radius: 5px;
  width: 100%;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    h2 {
      color: #f0db4f;
      margin-bottom: 5px;
    }
  }
  .description {
    padding-top: 20px;
  }
`;
