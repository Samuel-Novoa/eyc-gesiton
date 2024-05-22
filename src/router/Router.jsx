import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Admin from "../pages/admin/Admin";
import Clientes from "../pages/admin/Clientes";
import Fichas from "../pages/admin/Fichas";
import Servicios from "../pages/admin/Servicios";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import UserView from "../pages/user/UserView";
import { useAuth, getRole } from "../context/AuthContext";

const Router = () => {
  const { user } = useAuth();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (user) {
      getRole(user.uid).then((role) => {
        setUserRole(role);
      });
    }
  }, [user]);

  return (
    <BrowserRouter basename="/eyc-gesiton">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={userRole === "admin" ? <Admin /> : <Navigate to="/login" />}
        />
        <Route
          path="/clientes"
          element={
            userRole === "admin" ? <Clientes /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/fichas"
          element={userRole === "admin" ? <Fichas /> : <Navigate to="/login" />}
        />
        <Route
          path="/servicios"
          element={
            userRole === "admin" ? <Servicios /> : <Navigate to="/login" />
          }
        />

        {/* User Routes */}
        <Route
          path="/"
          element={
            userRole === "user" ? <UserView /> : <Navigate to="/login" />
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
