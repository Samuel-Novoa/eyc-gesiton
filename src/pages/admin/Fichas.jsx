import React from 'react';
import Main from '../../layout/Main';
import { useAuth } from "../../context/AuthContext";

const Fichas = () => {
  const auth = useAuth()
  const { displayName } = auth.user

  return (
    <Main>
      <h1>Bienvenido {displayName && <span>{displayName}</span>}</h1>
    </Main>
  );
};

export default Fichas;