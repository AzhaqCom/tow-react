import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/marteau-de-thor.svg'
function Header() {
    return (
        <header className="App-header">

            <ul >
                <img src={logo} className='logo' alt='Logo marteau'></img>
                <NavLink className="active link-menu" to='/tow-react'>Résumé d'un tour</NavLink>
                <NavLink className="active link-menu" to='/tow-react/regle-he'>Règle HE</NavLink>
                <NavLink className="link-menu" to='/tow-react/regle'>Règle Spé</NavLink>
            </ul>
        </header>
    );
}

export default Header;