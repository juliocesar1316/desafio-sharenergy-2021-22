import Header from "../../components/header/index";
import Menu from "../../components/menu/menu";
import './style.css'
import '../../App.css'
import Form from '../../components/formCliente/index'

function CadastroCliente(){
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
                    <h1>Cadastro Cliente</h1>
                    <div className="form">                      
                        <Form/>
                    </div>                          
                </div> 
            </div>                                 
        </div>
    
    )
};

export default CadastroCliente
