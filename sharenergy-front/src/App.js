import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import CadastroCliente from "./pages/cadastroCliente/Cadastro";
import CadastroUsina from "./pages/cadastroUsina/Cadastro";
import Quadro from "./pages/quadroClientes/Quadro";
import QuadroInvestimentos from "./pages/quadroInvestimentos/Quadro";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/cadastroCliente" component={CadastroCliente} />
          <Route path="/cadastroUsina" component={CadastroUsina} />
          <Route path="/quadroCliente" component={Quadro} />
          <Route path="/quadroInvestimentos" component={QuadroInvestimentos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
