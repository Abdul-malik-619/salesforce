import { Link } from "react-router-dom";

const NavBar = () => {
  let name = "Baraka";

  return (
    <div>
      <ul>
        <li>
          <Link to="/">{ name}</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;