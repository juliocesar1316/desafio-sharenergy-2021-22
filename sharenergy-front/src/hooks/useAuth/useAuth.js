import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthProvider() {
  const [token, setToken] = useState("");

  const logar = async (user, senha) => {
    const result = await fetch(`https://api-sharenergy.herokuapp.com/user`);
    const data = await result.json();
    if (data[0].usuario === user && data[0].senha === senha) {
      setToken(data);
      console.log("entrei");
      return true;
    } else {
      return false;
    }
  };

  return {
    token,
    logar,
  };
}
