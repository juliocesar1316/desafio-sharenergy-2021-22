import Header from "../../components/header/index";
import Menu from "../../components/menu/menu";
import './style.css'
import '../../App.css'
import FormUsina from '../../components/formUsina/index'

function CadastroUsina(){
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
                    <h1>Cadastro Usina</h1>
                    <div className="form">                       
                       <FormUsina/>
                    </div>                          
                </div> 
            </div>     
        </div>
    
    )
};

export default CadastroUsina
