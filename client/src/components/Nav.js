import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="navbar-text" href="/saved">
        See Your Saved Books
      </a>
    </nav>
  );
}

export default Nav;
