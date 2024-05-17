import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";

function LoginFirebase() {
     // Inicializar el authcontext para obtener y manejar las funciones de login, register, logout
     const auth = useAuth()

     // Nombre de usuario
     const {displayName} = auth.user
     // Alerta: Nombre de usuario
     console.log(displayName)

     // Registro
     const [emailRegister, setEmailRegister] = useState("")
     const [passwordRegister, setPasswordRegister] = useState("")

     // Login
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     // Alerta: Manejo de los campos de input
     console.log(emailRegister, passwordRegister, "stateLoginFireBase")

     const handleRegister = (e) => {
          // Para que el boton no refresque la pagina y los datos se pierdan
          e.preventDefault()
          // Utilizar la funcion de register invocando el useauth
          auth.register(emailRegister, passwordRegister)
     }

     const handleLogin = (e) => {
          e.preventDefault();
          auth.login(email, password)
     };

     const handleGoogle = (e) => {
          e.preventDefault();
          auth.loginWithGoogle()
     }

     const handleLogout = () => {
          auth.logout()
     }
     // ALerta: Login
     console.log(email, password, "stateLogin")

     return (
          <div className="App">
               {displayName && <p>User: {displayName}</p>}
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

               <button onClick={() => handleLogout()} className="button">Logout</button>
          </div>
     );
}

export default LoginFirebase;
