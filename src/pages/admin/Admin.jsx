import React, { useState } from "react";
import Main from "../../layout/Main";
import app, { auth } from "../../firebase/firebase.config"; // Import the app instance
// Firestore
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const Admin = () => {
  const authGet = getAuth(app);
  const firestore = getFirestore(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  async function userRegister(email, password, role) {
    const userInfo = await createUserWithEmailAndPassword(
      authGet,
      email,
      password
    ).then((userFirebase) => {
      return userFirebase;
    });

    console.log(userInfo.user.uid);

    const docuRef = doc(firestore, `users/${userInfo.user.uid}`);
    setDoc(docuRef, { email: email, role: role });
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log("submit", email, password, role);

    userRegister(email, password, role);
  }

  return (
    <Main>
      <h1>Admin</h1>
      <form onClick={submitHandler}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Administrador</option>
          <option value="user">User</option>
        </select>

        <input type="submit" value={"Registrar"} />
      </form>
    </Main>
  );
};

export default Admin;
