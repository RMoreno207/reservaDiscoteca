import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={"nav-bar"}>
      <Link to="/">Home</Link>
      <Link to="/singUp">Registrarse</Link>
      <Link to="/booking">Reserva</Link>
    </nav>
  )
};

export default Nav;
