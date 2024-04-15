import '../styles/style.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='banner'>
            <img src={logo} alt='Logo Kasa' className='logo' />
            <nav className='navbar'>
                <Link to="/"><h2>Accueil</h2></Link>
                <Link to="/APropos"><h2>A Propos</h2></Link>
            </nav>
        </div>
    )
}

export default Banner