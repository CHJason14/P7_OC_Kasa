import '../styles/style.css'
import logo from '../assets/logofooter.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo Kasa' className='logo-footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer