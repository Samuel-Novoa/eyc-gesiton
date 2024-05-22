import React, { useState, useEffect } from "react";
// Globalizar nuestras funciones de firebase a toda la aplicacion
import { ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
// Funciones de firebase auth - creando la autenticacion (register/login/google/logout)
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firestore = getFirestore();

export async function getRole(uid) {
  const docuRef = doc(firestore, `users/${uid}`);
  const docuCifrada = await getDoc(docuRef);

  if (docuCifrada.exists()) {
    const infoFinal = docuCifrada.data().role;
    return infoFinal;
  } else {
    console.log("No such document");
    return null;
  }
}

export const authContext = createContext();

// Alerta: Administrar los errores del context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error al crear el auth context");
  }
  return context;
};

// PROVIDER
// Crea un componente de react para globalizar el contexto y compartir la infromacion entre componentes

export function AuthProvider({ children }) {
  // Para guardar el valor actual del usuario
  const [user, setUser] = useState("");
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      // Alerta: validacion si no hay ya un usuario logeado en la aplicacion
      if (!currentUser) {
        console.log("No hay usuario ingresado");
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribed();
  }, []);

  // Funcion para el registro
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // ALerta para probar el provider
    console.log(response);
  };

  // Funcion para el login con el email y la contrasena
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    // Alerta para probar el provider
    console.log(response);
  };

  // Funcion para ingresar con google [esta necesita de importar el google auth y popup]
  const loginWithGoogle = async (email, password) => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  // Funcion de cerrar sesion
  const logout = async () => {
    const response = await signOut(auth);
    // Alerta
    console.log(response);
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
