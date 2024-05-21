import '../styles/style.css'
import logo from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <img src={logo} alt='Logo Kasa' className='logo' />
                <nav className='navbar'>
                    <NavLink to="/"><h2>Accueil</h2></NavLink>
                    <NavLink to="/APropos" className="NavLink"><h2>A Propos</h2></NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header