import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import "./style.css";
import "../../App.css";
import Investimento from "../../components/investimento";

function QuadroInvestimentos() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="content">
          <Menu />
        </div>
        <div className="section">
          <h1>Quadro de Investimentos</h1>
          <Investimento />
        </div>
      </div>
    </div>
  );
}

export default QuadroInvestimentos;
