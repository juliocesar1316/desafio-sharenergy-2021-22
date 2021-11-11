import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import CadastroCliente from "./pages/cadastroCliente/Cadastro";
import CadastroUsina from "./pages/cadastroUsina/Cadastro";
import Quadro from "./pages/quadroClientes/Quadro";
import QuadroInvestimentos from "./pages/quadroInvestimentos/Quadro";

import { useAuth } from "./hooks/useAuth/useAuth";
import { AuthProvider } from "./context/AuthContext/AuthContext";

function PaginasProtegidas(props) {
  const { token } = useAuth();
  return (
    <Route
      render={() =>
        token === "entrou" ? props.children : <Redirect to="/login" />
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PaginasProtegidas>
              <Route path="/" exact component={Dashboard} />
              <Route path="/cadastroUsina" component={CadastroUsina} />
              <Route path="/cadastroCliente" component={CadastroCliente} />

              <Route path="/quadroCliente" component={Quadro} />
              <Route
                path="/quadroInvestimentos"
                component={QuadroInvestimentos}
              />
            </PaginasProtegidas>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
