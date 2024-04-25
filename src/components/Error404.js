import '../styles/style.css'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='error404'>
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/" key="Accueil" ><p>Retourner sur la page d'acceuil</p></Link>
    </div>
  )
}
