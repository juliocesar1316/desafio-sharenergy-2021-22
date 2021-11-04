import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import './style.css'
import '../../App.css'

function Login(){
    return(
        <div>
            <div className="header">
                <Header/>
            </div>            
            <div className="content">
                <Menu/>
                <div className="section">
                    conteudo
                </div>
            </div>       
      </div>
    
    )
};

export default Login
