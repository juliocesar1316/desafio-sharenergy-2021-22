import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return(
        <header>
            <h1>SHARENERGY</h1>
            <div className="user">
                <p>Bem Vindo, Fulano</p>
                <Link to='/login' className='btn-out'>Sair</Link>
            </div>
        </header>
    )
}
export default Header