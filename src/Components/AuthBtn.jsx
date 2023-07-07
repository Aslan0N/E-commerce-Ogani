import React from "react";
import { Util } from "../Utils/Util";
import { NavLink } from "react-router-dom";

const AuthBtn = () => {
  const data = JSON.parse(localStorage.getItem("User"));
  const logOut = () => {
    localStorage.removeItem("User");
    window.location.reload();
  };
  const auth = () => {
    if (Util()) {
      return (
        <div>
          <div className="dropdown">
            {data.userName}
            <ul className="dropdown-menu">
              <li onClick={logOut}>LogOut</li>
             
            </ul>
          </div>
        </div>
      );
    } else {
      return <NavLink to={"/login"}>Login</NavLink>;
    }
  };
  return <>{auth()}</>;
};

export default AuthBtn;
