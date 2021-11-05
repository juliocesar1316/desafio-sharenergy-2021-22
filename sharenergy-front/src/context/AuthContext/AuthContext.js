import { createContext } from "react";
import { useAuthProvider } from "../../hooks/useAuth/useAuth";

const AuthContext = createContext({});

export function AuthProvider(props) {
  const authProvider = useAuthProvider();
  return (
    <AuthContext.Provider value={authProvider}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
