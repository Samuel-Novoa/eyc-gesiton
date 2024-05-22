import React, { useState, useEffect} from "react";
import { useAuth, getRole } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { user } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      getRole(user.uid).then((role) => {
        setRole(role);
      });
    }
  }, [user]);

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div>
          <h1>E&C - Gestion</h1>
          <ul>
            {role ===
              "admin" ? (
                <>
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
                </>
              ) : null}
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
