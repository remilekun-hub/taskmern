import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Taskify</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
