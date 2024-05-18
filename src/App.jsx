import LoginFirebase from "./login/LoginFirebase";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>E&C GESTION #1</h1>
        <LoginFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;