import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to='/' style={{ display: "block", width: "fit-content" }}>
      <h1 style={{ fontSize: "4.3rem", width: "fit-content" }}>Musicist</h1>
    </NavLink>
  );
}

export default Logo;
