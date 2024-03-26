import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="App-header">

            <ul >
                <NavLink className="active link-menu" to='/tow-react'>Résumé d'un tour </NavLink>
                <NavLink className="active link-menu" to='/regle-he'>Règle Haut elfes</NavLink>
                <NavLink className="link-menu" to='/regle'>Règle</NavLink>
            </ul>
        </header>
    );
}

export default Header;