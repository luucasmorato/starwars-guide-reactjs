import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { HeaderStyle } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/">
      <HeaderStyle>
        <Logo className="logo" />
      </HeaderStyle>
    </Link>
  );
}
