import styled from "styled-components";

export const ListMovies = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2px 0;

  li {
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 10px 15px;
    margin: 10px 10px;
    width: 320px;
    &:hover {
      box-shadow: 0px 1px 10px 3px rgba(255, 255, 10, 0.6);
    }

    header {
      text-align: center;
      color: #f0db4f;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 5px;
    }

    div {
      margin: 5px 0;
      a {
        color: #f0db4f;
        font-weight: bold;
        display: flex;
        justify-content: flex-end;
      }

      p {
        text-align: justify;
      }
    }
  }
`;
