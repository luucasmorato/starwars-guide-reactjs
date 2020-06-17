import styled, { keyframes } from "styled-components";

const loaderSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  .loader-logo {
    animation: ${loaderSpin} infinite 2.5s linear;
    height: 8rem;
    fill: #ffe81f;
  }
`;
