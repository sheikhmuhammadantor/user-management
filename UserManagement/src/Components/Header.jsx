import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {

  const links = <div className="flex gap-4">
    <NavLink className="btn text-lg" to = "/" > All User</NavLink>
    <NavLink className="btn text-lg" to="/add-user">Add User</NavLink>
    <NavLink className="btn text-lg" to="/update-user">Update User</NavLink>
  </div>
    
return (
  <div className="navbar bg-base-100 container mx-auto">
    <div className="navbar-start">
      <a className="btn btn-ghost text-3xl">User Management</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn text-lg">Sign Up</a>
    </div>
  </div>
)
}

export default Header
