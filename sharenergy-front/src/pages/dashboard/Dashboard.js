import Grafico from "../../components/dadosUsina/grafico";
import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import './style.css'
import '../../App.css'


function Dashboard(){
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
               <h1>Dashboard</h1>
               <Grafico/>                       
            </div> 
         </div>           
      </div>
    
   )  
};

export default Dashboard