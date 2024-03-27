import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/marteau-de-thor.svg'
function Header() {
    return (
        <header className="App-header">

            <ul >
                <img src={logo} className='logo' alt='Logo marteau'></img>
                <NavLink className="active link-menu" to='/'>Résumé d'un tour</NavLink>
                
                <NavLink className="link-menu" to='/regle'>Règles Spéciales</NavLink>
                <NavLink className="link-menu" to='/objetm'>Objets Magiques</NavLink>
                <NavLink className="link-menu" to='/domaine'>Domaine de Magie</NavLink>
                <NavLink className="link-menu" to='/regle-he'>Haut elfe</NavLink>
            </ul>
        </header>
    );
}

export default Header;