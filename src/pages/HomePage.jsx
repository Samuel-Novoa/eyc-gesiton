import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import { useAuth, getRole } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      getRole(user.uid)
        .then((role) => {
          setRole(role); // Update the role state
          if (role === "user") {
            navigate("/usuario");
          } else {
            navigate("/fichas");
          }
        })
        .catch((error) => {
          console.error("Error fetching role:", error);
        });
    }
  }, [user, navigate]);

  return (
    <Main>
      <div>HomePage</div>
      {role === "admin" ? (
        <p>Admin</p>
      ) : role === "user" ? (
        <p>User</p>
      ) : null}{" "}
    </Main>
  );
};

export default HomePage;
