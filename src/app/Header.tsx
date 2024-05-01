import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center border-b-2 border-white text-white py-2 px-4"
    >
      <div id="header-heading" className="flex">
        <h1 className="text-xl font-semibold">React Three Fiber</h1>
      </div>
      <div id="nav-container" className="flex">
        <nav id="nav" className="flex">
          <ul
            id="ul"
            className="flex justify-center items-center gap-4 text-base font-light"
          >
            <li>nav example 1</li>
            <li>nav example 2</li>
            <li>nav example 3</li>
            <li>nav example 4</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
