import React from "react";
import { LoaderStyle } from "./styles";
import { ReactComponent as LoaderLogo } from "../../assets/images/loader.svg";

const Loader = () => (
  <LoaderStyle data-testid="loader">
    <LoaderLogo className="loader-logo" />
  </LoaderStyle>
);

export default Loader;
