import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/marvel-logo.png";
import { Nav } from "./styles";

const Header = () => {
  return (
    <Nav>
      <Link to="/Home">
        <img src={logo} width={100} alt="marvel logo" />
      </Link>
    </Nav>
  );
};

export default Header;
