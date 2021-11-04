import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import './style.css'
import '../../App.css'
import TabelaCliente from "../../components/tabelaClientes";
import TabelaUsina from "../../components/tabelaUsinas";

function Quadro(){
    return(
        <div>
            <div className="header">
                <Header/>
            </div>            
            <div className="container">
                <div className="content">
                    <Menu/>
                </div>
                <div className="section">
                    <h1>Quadro de Clientes e Usinas</h1>
                    <div className="quadro">
                        <div className="tabelaClientes">
                            <h2>Clientes</h2>
                            <TabelaCliente/>                           
                        </div>
                        <div className="tabelaUsinas">
                            <h2>Usinas</h2>
                            <TabelaUsina/>
                        </div>
                    </div> 
                </div> 
            </div>                 
        </div>
    
    )
};

export default Quadro
