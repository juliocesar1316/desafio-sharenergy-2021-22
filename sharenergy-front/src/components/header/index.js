import { useHistory } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../hooks/useAuth/useAuth";

function Header() {
  const { logout } = useAuth();
  const history = useHistory();

  return (
    <header>
      <h1>SHARENERGY</h1>
      <div className="user">
        <p>Bem Vindo</p>
        <button
          className="btn-out"
          onClick={() => logout(() => history.push("/login"))}
        >
          Sair
        </button>
      </div>
    </header>
  );
}
export default Header;
