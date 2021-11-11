import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocalStorage } from "react-use";

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthProvider() {
  const [token, setToken, remove] = useLocalStorage("storage", "legal");

  const logar = async (user, senha) => {
    const result = await fetch(`https://api-sharenergy.herokuapp.com/user`);
    const data = await result.json();
    if (data[0].usuario === user && data[0].senha === senha) {
      setToken("entrou");
      console.log(token);
      return true;
    } else {
      return false;
    }
  };

  const logout = (call) => {
    remove();
    call();
  };

  return {
    token,
    logar,
    logout,
  };
}
