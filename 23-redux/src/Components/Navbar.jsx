import React from "react";
import NavbarProfile from "./NavbarProfile";

const Navbar = (props) => {
  return (
    <div>
      <h1>Navbar Parent</h1>
      <NavbarProfile nama={props.nama} />
    </div>
  );
};

export default Navbar;
