import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Admin from '../pages/admin/Admin';
import Clientes from '../pages/admin/Clientes';
import Fichas from '../pages/admin/Fichas';
import Servicios from '../pages/admin/Servicios';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter basename="/eyc-gesiton">
      <Routes>
        <Route path="/" element={user ? <Navigate to="/fichas" /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/fichas" /> : <LoginPage />} />
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/clientes" element={user ? <Clientes /> : <Navigate to="/login" />} />
        <Route path="/fichas" element={user ? <Fichas /> : <Navigate to="/login" />} />
        <Route path="/servicios" element={user ? <Servicios /> : <Navigate to="/login" />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;