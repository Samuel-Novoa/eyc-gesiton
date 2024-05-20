import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function LoginFirebase() {
     // Inicializar el authcontext para obtener y manejar las funciones de login, register, logout
     const auth = useAuth()

     const navigate = useNavigate();

     // Nombre de usuario
     const { displayName } = auth.user
     // Alerta: Nombre de usuario
     // console.log(displayName)

     // Registro
     const [emailRegister, setEmailRegister] = useState("")
     const [passwordRegister, setPasswordRegister] = useState("")

     // Login
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     // Alerta: Manejo de los campos de input
     // console.log(emailRegister, passwordRegister, "stateLoginFireBase")

     const handleRegister = (e) => {
          // Para que el boton no refresque la pagina y los datos se pierdan
          e.preventDefault()
          // Utilizar la funcion de register invocando el useauth
          auth.register(emailRegister, passwordRegister)
     }

     // const handleLogin = (e) => {
     //      e.preventDefault();
     //      auth.login(email, password)
     // };

     const handleLogin = (e) => {
          try {
               e.preventDefault();
               auth.login(email, password);
               navigate('/fichas');
          } catch (error) {
               console.error('Error al iniciar sesión:', error);
               // Manejar el error de inicio de sesión aquí
          }
     };

     const handleGoogle = (e) => {
          e.preventDefault();
          auth.loginWithGoogle()
     }

     return (
          <div className="App">
               <form className="form">
                    <h3 className="title">Registro</h3>
                    <input onChange={(e) => setEmailRegister(e.target.value)} type="email" className="input" />
                    <input onChange={(e) => setPasswordRegister(e.target.value)} type="password" className="input" />
                    <button onClick={(e) => handleRegister(e)} className="button">submit</button>
               </form>

               <form className="form">
                    <h3 className="title">Login</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" />
                    <button onClick={(e) => handleLogin(e)} className="button">submit</button>
                    <button onClick={(e) => handleGoogle(e)} className="button">Google</button>
               </form>
          </div>
     );
}

export default LoginFirebase;
