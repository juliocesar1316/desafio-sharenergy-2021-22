import { NavLink } from "react-router-dom";
import "./style.css";
function Menu() {
  return (
    <div className="nav-menu">
      <div className="menu">
        <NavLink to="/">Dashboard </NavLink>
        <NavLink to="/cadastroCliente">Cadastro Cliente </NavLink>
        <NavLink to="/cadastroUsina">Cadastro Usina </NavLink>
        <NavLink to="/quadroCliente">Clientes e Usinas </NavLink>
        <NavLink to="/quadroInvestimentos">Investimentos </NavLink>
      </div>
    </div>
  );
}
export default Menu;
