import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const auth = useAuth();
  //   const { displayName } = auth.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div>
          <Link to={"/fichas"}>E&C - Gestion</Link>
          <ul>
            <li>
              <Link to={"/fichas"}>Fichas</Link>
            </li>
            <li>
              <Link to={"/clientes"}>Clientes</Link>
            </li>
            <li>
              <Link to={"/servicios"}>Servicios</Link>
            </li>
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
            <li>
              <button onClick={() => handleLogout()} className="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
