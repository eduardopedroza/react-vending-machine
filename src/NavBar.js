import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/cheetos">
        Cheetos
      </Link>
      <Link to="/takis">
        Takis
      </Link>
      <Link to="/kitkat">
        KitKat
      </Link>
    </nav>
  );
}

export default NavBar;